import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { AuthChangeEvent, User } from "@supabase/supabase-js";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import {
  ensureProfileFromAuthUser,
  fetchCustomerProfile,
  signInWithGoogle,
  signOutCustomer,
  updateCustomerProfile,
} from "@/services/customerAuthService";
import type { CustomerProfile, CustomerProfileUpdate } from "@/types/customerProfile";
import { isProfileComplete } from "@/utils/customerProfileUtils";
import { useToast } from "@/context/ToastContext";

type CustomerAuthContextValue = {
  isConfigured: boolean;
  isLoading: boolean;
  isGoogleSigningIn: boolean;
  user: User | null;
  profile: CustomerProfile | null;
  isProfileOpen: boolean;
  isProfileOnboarding: boolean;
  openProfile: () => void;
  closeProfile: () => void;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  saveProfile: (
    patch: CustomerProfileUpdate,
  ) => Promise<{ success: boolean; error?: string }>;
  refreshProfile: () => Promise<void>;
};

const CustomerAuthContext = createContext<CustomerAuthContextValue | null>(null);

const shouldPromptProfileCompletion = (
  event: AuthChangeEvent,
  profile: CustomerProfile | null,
): boolean => {
  if (!profile || isProfileComplete(profile)) {
    return false;
  }

  return event === "SIGNED_IN" || event === "INITIAL_SESSION";
};

export const CustomerAuthProvider = ({ children }: { children: ReactNode }) => {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<CustomerProfile | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileOnboarding, setIsProfileOnboarding] = useState(false);
  const welcomedSessionRef = useRef<string | null>(null);

  const isConfigured = isSupabaseConfigured();

  const promptProfileIfNeeded = useCallback(
    (event: AuthChangeEvent, loadedProfile: CustomerProfile | null): void => {
      if (!shouldPromptProfileCompletion(event, loadedProfile)) {
        return;
      }

      setIsProfileOnboarding(true);
      setIsProfileOpen(true);
    },
    [],
  );

  const showWelcomeToast = useCallback(
    (
      event: AuthChangeEvent,
      sessionUser: User,
      loadedProfile: CustomerProfile | null,
    ): void => {
      if (event !== "SIGNED_IN") {
        return;
      }

      const sessionKey = sessionUser.id;
      if (welcomedSessionRef.current === sessionKey) {
        return;
      }
      welcomedSessionRef.current = sessionKey;

      if (loadedProfile && isProfileComplete(loadedProfile)) {
        showToast("success", "Welcome back!", "You are signed in.");
        return;
      }

      showToast(
        "success",
        "Account ready",
        "Please complete your profile to continue.",
      );
    },
    [showToast],
  );

  const loadProfile = useCallback(
    async (
      sessionUser: User,
      authEvent: AuthChangeEvent = "INITIAL_SESSION",
    ): Promise<CustomerProfile | null> => {
      await ensureProfileFromAuthUser(
        sessionUser.id,
        sessionUser.user_metadata as Record<string, unknown>,
      );
      const data = await fetchCustomerProfile(sessionUser.id);
      setProfile(data);
      promptProfileIfNeeded(authEvent, data);
      showWelcomeToast(authEvent, sessionUser, data);
      return data;
    },
    [promptProfileIfNeeded, showWelcomeToast],
  );

  const refreshProfile = useCallback(async (): Promise<void> => {
    if (user) {
      await loadProfile(user);
    }
  }, [user, loadProfile]);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    const init = async (): Promise<void> => {
      const { data } = await supabase.auth.getSession();
      const sessionUser = data.session?.user ?? null;
      setUser(sessionUser);
      if (sessionUser) {
        await loadProfile(sessionUser, "INITIAL_SESSION");
      }
      setIsLoading(false);
    };

    void init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const nextUser = session?.user ?? null;
      setUser(nextUser);
      setIsGoogleSigningIn(false);

      if (nextUser) {
        void loadProfile(nextUser, event);
      } else {
        setProfile(null);
        setIsProfileOpen(false);
        setIsProfileOnboarding(false);
        welcomedSessionRef.current = null;
      }
    });

    return () => subscription.unsubscribe();
  }, [loadProfile]);

  const openProfile = useCallback(() => {
    setIsProfileOnboarding(false);
    setIsProfileOpen(true);
  }, []);

  const closeProfile = useCallback(() => {
    if (isProfileOnboarding && !isProfileComplete(profile)) {
      return;
    }
    setIsProfileOpen(false);
    setIsProfileOnboarding(false);
  }, [isProfileOnboarding, profile]);

  const handleGoogleSignIn = useCallback(async () => {
    setIsGoogleSigningIn(true);
    const result = await signInWithGoogle();
    if (!result.success) {
      setIsGoogleSigningIn(false);
    }
    return result;
  }, []);

  const signOut = useCallback(async () => {
    await signOutCustomer();
    setProfile(null);
    setUser(null);
    setIsProfileOpen(false);
    setIsProfileOnboarding(false);
    welcomedSessionRef.current = null;
  }, []);

  const saveProfile = useCallback(
    async (patch: CustomerProfileUpdate) => {
      if (!user?.id) {
        return { success: false, error: "Not signed in." };
      }

      const result = await updateCustomerProfile(user.id, patch);
      if (result.success) {
        const updated = await loadProfile(user, "TOKEN_REFRESHED");
        if (isProfileOnboarding) {
          if (updated && isProfileComplete(updated)) {
            setIsProfileOnboarding(false);
            setIsProfileOpen(false);
          }
        } else {
          setIsProfileOpen(false);
        }
      }
      return result;
    },
    [user, loadProfile, isProfileOnboarding],
  );

  const value = useMemo(
    (): CustomerAuthContextValue => ({
      isConfigured,
      isLoading,
      isGoogleSigningIn,
      user,
      profile,
      isProfileOpen,
      isProfileOnboarding,
      openProfile,
      closeProfile,
      signInWithGoogle: handleGoogleSignIn,
      signOut,
      saveProfile,
      refreshProfile,
    }),
    [
      isConfigured,
      isLoading,
      isGoogleSigningIn,
      user,
      profile,
      isProfileOpen,
      isProfileOnboarding,
      openProfile,
      closeProfile,
      handleGoogleSignIn,
      signOut,
      saveProfile,
      refreshProfile,
    ],
  );

  return (
    <CustomerAuthContext.Provider value={value}>
      {children}
    </CustomerAuthContext.Provider>
  );
};

export const useCustomerAuth = (): CustomerAuthContextValue => {
  const ctx = useContext(CustomerAuthContext);
  if (!ctx) {
    throw new Error("useCustomerAuth must be used within CustomerAuthProvider");
  }
  return ctx;
};

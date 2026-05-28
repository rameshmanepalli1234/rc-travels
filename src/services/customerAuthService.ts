import { getSupabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type {
  CustomerProfile,
  CustomerProfileUpdate,
} from "@/types/customerProfile";
import {
  buildFullName,
  splitDisplayName,
} from "@/utils/customerProfileUtils";

export type AuthResult = {
  success: boolean;
  error?: string;
};

const mapProfile = (row: CustomerProfile): CustomerProfile => ({
  id: row.id,
  first_name: row.first_name ?? "",
  last_name: row.last_name ?? "",
  full_name: row.full_name ?? "",
  phone: row.phone ?? "",
  date_of_birth: row.date_of_birth ?? null,
  city: row.city ?? null,
  updated_at: row.updated_at,
});

export const fetchCustomerProfile = async (
  userId: string,
): Promise<CustomerProfile | null> => {
  const supabase = getSupabase();
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("customer_profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return mapProfile(data as CustomerProfile);
};

export const upsertCustomerProfile = async (
  userId: string,
  patch: CustomerProfileUpdate,
): Promise<AuthResult> => {
  const supabase = getSupabase();
  if (!supabase) {
    return { success: false, error: "Customer accounts are not configured." };
  }

  const { error } = await supabase.from("customer_profiles").upsert({
    id: userId,
    first_name: patch.first_name.trim(),
    last_name: patch.last_name.trim(),
    full_name: patch.full_name.trim(),
    phone: patch.phone.trim(),
    date_of_birth: patch.date_of_birth || null,
    city: patch.city?.trim() || null,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
};

const getOAuthRedirectUrl = (): string => {
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}`;
};

/** Sign in existing customers or create account on first Google login */
export const signInWithGoogle = async (): Promise<AuthResult> => {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error:
        "Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to .env",
    };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return { success: false, error: "Could not connect to account service." };
  }

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getOAuthRedirectUrl(),
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
};

export const ensureProfileFromAuthUser = async (
  userId: string,
  metadata: Record<string, unknown> | undefined,
): Promise<void> => {
  const existing = await fetchCustomerProfile(userId);

  const googleName =
    (typeof metadata?.full_name === "string" && metadata.full_name) ||
    (typeof metadata?.name === "string" && metadata.name) ||
    "";

  const { firstName, lastName } = splitDisplayName(googleName);
  const needsName =
    !existing?.first_name?.trim() &&
    !splitDisplayName(existing?.full_name ?? "").firstName.trim();

  if (!needsName || !firstName.trim()) {
    return;
  }

  await upsertCustomerProfile(userId, {
    first_name: firstName,
    last_name: lastName,
    full_name: buildFullName(firstName, lastName),
    phone: existing?.phone ?? "",
    date_of_birth: existing?.date_of_birth ?? null,
    city: existing?.city ?? null,
  });
};

export const signOutCustomer = async (): Promise<void> => {
  const supabase = getSupabase();
  if (!supabase) {
    return;
  }

  await supabase.auth.signOut();
};

export const updateCustomerProfile = async (
  userId: string,
  patch: CustomerProfileUpdate,
): Promise<AuthResult> => upsertCustomerProfile(userId, patch);

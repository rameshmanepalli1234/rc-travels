import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useCustomerAuth } from "@/context/CustomerAuthContext";
import { useToast } from "@/context/ToastContext";
import {
  StyledAccountButton,
  StyledAccountMenu,
  StyledAccountWrap,
} from "./style";

const MENU_WIDTH = 240;
const MENU_GAP = 8;

type MenuPosition = {
  top: number;
  left: number;
};

type AccountMenuProps = {
  /** Opens upward inside the mobile drawer */
  popoverPlacement?: "bottom" | "top";
};

const getMenuPosition = (
  anchor: DOMRect,
  placement: "bottom" | "top",
): MenuPosition => {
  const left = Math.max(
    MENU_GAP,
    Math.min(
      anchor.right - MENU_WIDTH,
      window.innerWidth - MENU_WIDTH - MENU_GAP,
    ),
  );

  if (placement === "top") {
    return {
      top: Math.max(MENU_GAP, anchor.top - MENU_GAP - 220),
      left,
    };
  }

  return {
    top: anchor.bottom + MENU_GAP,
    left,
  };
};

const AccountMenu = ({ popoverPlacement = "bottom" }: AccountMenuProps) => {
  const {
    user,
    profile,
    isLoading,
    isGoogleSigningIn,
    openProfile,
    signInWithGoogle,
    signOut,
    isConfigured,
  } = useCustomerAuth();
  const { showToast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updateMenuPosition = useCallback((): void => {
    if (!wrapRef.current) {
      return;
    }

    setMenuPosition(
      getMenuPosition(wrapRef.current.getBoundingClientRect(), popoverPlacement),
    );
  }, [popoverPlacement]);

  useEffect(() => {
    if (!menuOpen) {
      setMenuPosition(null);
      return;
    }

    updateMenuPosition();

    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [menuOpen, updateMenuPosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Node;
      if (
        wrapRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAccountClick = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleGoogleAuth = async (): Promise<void> => {
    if (!isConfigured) {
      showToast(
        "error",
        "Login not configured",
        "Add Supabase keys to .env (see SUPABASE_SETUP.md).",
      );
      return;
    }

    const result = await signInWithGoogle();
    if (!result.success) {
      showToast("error", "Google sign-in failed", result.error ?? "Try again.");
      setMenuOpen(false);
    }
  };

  const displayName =
    [profile?.first_name, profile?.last_name].filter(Boolean).join(" ").trim() ||
    profile?.full_name?.trim() ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "Customer";

  const menuProps = {
    $fixed: true as const,
    $top: menuPosition?.top ?? 0,
    $left: menuPosition?.left ?? 0,
    $placement: popoverPlacement,
  };

  const guestMenu =
    menuOpen && !user && menuPosition ? (
      <StyledAccountMenu
        ref={menuRef}
        {...menuProps}
        data-testid="menu-account-guest"
        role="menu"
      >
        <p className="account-menu-title">Account</p>
        <p className="account-menu-subtitle">
          Sign in with your Google account.
        </p>

        {!isConfigured && (
          <p className="account-menu-hint">
            Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to your
            .env file, then restart the dev server. See SUPABASE_SETUP.md.
          </p>
        )}

        <button
          type="button"
          className="account-menu-google"
          role="menuitem"
          disabled={isLoading || isGoogleSigningIn}
          onClick={() => void handleGoogleAuth()}
          data-testid="button-account-google"
        >
          <span className="account-google-label">
            <FcGoogle aria-hidden className="account-google-icon" />
            <span className="account-google-text">
              {isGoogleSigningIn ? "Redirecting…" : "Continue with Google"}
            </span>
          </span>
        </button>
      </StyledAccountMenu>
    ) : null;

  const signedInMenu =
    menuOpen && user && menuPosition ? (
      <StyledAccountMenu
        ref={menuRef}
        {...menuProps}
        data-testid="menu-account-dropdown"
        role="menu"
      >
        <div className="account-menu-name">{displayName}</div>
        {user.email && (
          <span className="account-menu-email">{user.email}</span>
        )}
        <button
          type="button"
          className="account-menu-item account-menu-item-primary"
          role="menuitem"
          onClick={() => {
            setMenuOpen(false);
            openProfile();
          }}
          data-testid="button-account-profile"
        >
          Edit profile
        </button>
        <button
          type="button"
          className="account-menu-item account-menu-item-danger"
          role="menuitem"
          onClick={() => {
            setMenuOpen(false);
            void signOut().then(() => {
              showToast(
                "success",
                "Signed out",
                "See you on your next trip.",
              );
            });
          }}
          data-testid="button-account-logout"
        >
          <FiLogOut aria-hidden className="account-logout-icon" />
          Sign out
        </button>
      </StyledAccountMenu>
    ) : null;

  const portaledMenu =
    typeof document !== "undefined"
      ? createPortal(
          <>
            {guestMenu}
            {signedInMenu}
          </>,
          document.body,
        )
      : null;

  return (
    <StyledAccountWrap
      ref={wrapRef}
      $menuOpen={menuOpen}
      data-tour="customer-account"
    >
      <StyledAccountButton
        type="button"
        $signedIn={Boolean(user)}
        aria-label={user ? "Account menu" : "Account"}
        aria-expanded={menuOpen}
        aria-haspopup="true"
        onClick={handleAccountClick}
        data-testid="button-account-menu"
      >
        <FiUser aria-hidden />
      </StyledAccountButton>

      {portaledMenu}
    </StyledAccountWrap>
  );
};

export default AccountMenu;

import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledAuthOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndexValues.MODAL_MASK};
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: ${fadeIn} 0.25s ease;
`;

export const StyledAuthModal = styled.div`
  position: relative;
  z-index: ${zIndexValues.MODAL_WRAPPER};
  width: min(420px, 100%);
  max-height: min(90vh, 640px);
  overflow-y: auto;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.35);
  animation: ${slideUp} 0.35s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const StyledAuthHeader = styled.div`
  padding: 20px 22px 16px;
  background: linear-gradient(135deg, #4fbd39 0%, #2d8a47 100%);
  color: #fff;

  h2 {
    margin: 0 0 6px;
    font-size: 20px;
    font-weight: 800;
  }

  p {
    margin: 0;
    font-size: 13px;
    opacity: 0.92;
    line-height: 1.45;
  }
`;

export const StyledAuthBody = styled.div`
  padding: 20px 22px 22px;

  .auth-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
    padding: 4px;
    border-radius: 10px;
    background: #f1f5f9;
  }

  .auth-tab {
    flex: 1;
    border: none;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
    color: #64748b;
    transition:
      background 0.2s ease,
      color 0.2s ease;

    &[data-active="true"] {
      background: #ffffff;
      color: #2d8a47;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
  }

  .auth-field {
    margin-bottom: 14px;
  }

  .auth-label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #334155;
  }

  .auth-input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #4fbd39;
      box-shadow: 0 0 0 3px rgba(79, 189, 57, 0.2);
    }

    &:disabled {
      background: #f8fafc;
      opacity: 0.7;
    }

    @media (min-width: 769px) {
      font-size: 15px;
    }
  }

  .auth-input-readonly {
    background: #f8fafc;
    color: #64748b;
  }

  .auth-error {
    margin: 0 0 12px;
    font-size: 13px;
    color: #b91c1c;
    line-height: 1.45;
  }

  .auth-hint {
    margin: 0 0 14px;
    font-size: 12px;
    color: #64748b;
    line-height: 1.45;
  }

  .auth-submit {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 13px 16px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    background: linear-gradient(135deg, #4fbd39, #2d8a47);
    color: #fff;
    transition: opacity 0.2s ease;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .auth-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledAccountWrap = styled.div<{ $menuOpen?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: ${({ $menuOpen }) => ($menuOpen ? zIndexValues.ACCOUNT_POPOVER : 1)};
`;

export const StyledAccountButton = styled.button<{ $signedIn?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid
    ${({ $signedIn }) => ($signedIn ? "#4fbd39" : "#e2e8f0")};
  border-radius: 50%;
  background: ${({ $signedIn }) =>
    $signedIn ? "rgba(79, 189, 57, 0.12)" : "#ffffff"};
  color: ${({ $signedIn }) => ($signedIn ? "#2d8a47" : "#64748b")};
  font-size: 18px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #4fbd39;
    color: #2d8a47;
    transform: scale(1.05);
  }
`;

export const StyledAccountMenu = styled.div<{
  $align?: "end";
  $fixed?: boolean;
  $top?: number;
  $left?: number;
  $placement?: "bottom" | "top";
}>`
  position: ${({ $fixed }) => ($fixed ? "fixed" : "absolute")};
  top: ${({ $fixed, $top, $placement }) =>
    $fixed
      ? `${$top ?? 0}px`
      : $placement === "top"
        ? "auto"
        : "calc(100% + 8px)"};
  bottom: ${({ $fixed, $placement }) =>
    !$fixed && $placement === "top" ? "calc(100% + 8px)" : "auto"};
  right: ${({ $fixed }) => ($fixed ? "auto" : "0")};
  left: ${({ $fixed, $left }) => ($fixed ? `${$left ?? 0}px` : "auto")};
  z-index: ${zIndexValues.ACCOUNT_POPOVER};
  min-width: 240px;
  padding: 8px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.18);
  border: 1px solid #e2e8f0;

  .account-menu-title {
    margin: 0;
    padding: 10px 12px 4px;
    font-size: 14px;
    font-weight: 800;
    color: #1a1a1a;
  }

  .account-menu-subtitle {
    margin: 0 0 8px;
    padding: 0 12px 10px;
    font-size: 12px;
    line-height: 1.45;
    color: #64748b;
    border-bottom: 1px solid #f1f5f9;
  }

  .account-menu-hint {
    margin: 0 0 8px;
    padding: 0 12px;
    font-size: 11px;
    color: #b45309;
    line-height: 1.4;
  }

  .account-menu-google {
    display: block;
    width: 100%;
    margin-top: 4px;
    padding: 11px 14px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: #ffffff;
    font-size: 14px;
    font-weight: 700;
    color: #334155;
    cursor: pointer;
    transition:
      background 0.2s ease,
      border-color 0.2s ease;

    &:hover:not(:disabled) {
      background: #f8fafc;
      border-color: #cbd5e1;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .account-google-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    line-height: 1;
  }

  .account-google-icon {
    display: block;
    font-size: 20px;
    flex-shrink: 0;
    line-height: 1;
  }

  .account-google-text {
    display: block;
    line-height: 1.25;
    white-space: nowrap;
  }

  .account-logout-icon {
    margin-right: 6px;
    vertical-align: middle;
  }

  .account-menu-name {
    padding: 10px 12px 8px;
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 4px;
    word-break: break-word;
  }

  .account-menu-email {
    display: block;
    padding: 0 12px 10px;
    font-size: 12px;
    color: #64748b;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 4px;
  }

  .account-menu-item {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
    background: transparent;
    cursor: pointer;

    &:hover {
      background: rgba(79, 189, 57, 0.1);
      color: #2d8a47;
    }
  }

  .account-menu-item-primary {
    margin-top: 4px;
    font-weight: 700;
    color: #2d8a47;

    &:hover {
      background: rgba(79, 189, 57, 0.14);
    }
  }

  .account-menu-item-danger {
    color: #b91c1c;

    &:hover {
      background: #fef2f2;
      color: #991b1b;
    }
  }
`;

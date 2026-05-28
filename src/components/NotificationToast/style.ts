import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const toastIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const toastOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`;

export const StyledToastStack = styled.div`
  position: fixed;
  top: max(16px, env(safe-area-inset-top, 0px));
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndexValues.TOAST};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(420px, calc(100vw - 24px));
  pointer-events: none;
`;

export const StyledToast = styled.div<{ $variant: "success" | "error"; $exiting?: boolean }>`
  pointer-events: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  box-shadow:
    0 12px 40px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.12) inset;
  animation: ${({ $exiting }) => ($exiting ? toastOut : toastIn)} 0.35s
    cubic-bezier(0.22, 1, 0.36, 1) both;

  background: ${({ $variant }) =>
    $variant === "success"
      ? "linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(22, 163, 74, 0.95) 100%)"
      : "linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(185, 28, 28, 0.95) 100%)"};
  color: #ffffff;

  .toast-icon {
    flex-shrink: 0;
    font-size: 22px;
    margin-top: 1px;
  }

  .toast-body {
    flex: 1;
    min-width: 0;
  }

  .toast-title {
    margin: 0 0 4px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;
  }

  .toast-message {
    margin: 0;
    font-size: 13px;
    line-height: 1.45;
    opacity: 0.95;
  }

  .toast-close {
    flex-shrink: 0;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.32);
    }
  }
`;

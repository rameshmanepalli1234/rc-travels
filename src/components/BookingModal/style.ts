import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const StyledOverlay = styled.div`
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

export const StyledModal = styled.div`
  position: relative;
  z-index: ${zIndexValues.MODAL_WRAPPER};
  width: min(440px, 100%);
  max-height: min(90vh, 640px);
  overflow-y: auto;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.35);
  animation: ${slideUp} 0.35s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const StyledModalHeader = styled.div`
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

export const StyledModalBody = styled.div`
  padding: 20px 22px 22px;

  .booking-tour-summary {
    margin-bottom: 18px;
    padding: 14px 16px;
    border-radius: 12px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
  }

  .booking-tour-name {
    margin: 0 0 6px;
    font-size: 16px;
    font-weight: 700;
    color: #14532d;
  }

  .booking-tour-meta {
    margin: 0 0 8px;
    font-size: 13px;
    color: #166534;
  }

  .booking-tour-price {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #15803d;
  }

  .booking-field {
    margin-bottom: 14px;
  }

  .booking-label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #334155;

    .stat-label-with-info,
    span:first-child {
      display: inline-flex;
      align-items: center;
    }
  }

  .booking-actions > span {
    flex: 1;
    display: flex;
  }

  .booking-actions .booking-btn-submit {
    width: 100%;
  }

  .booking-input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 16px;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      border-color: #4fbd39;
      box-shadow: 0 0 0 3px rgba(79, 189, 57, 0.2);
    }

    &:disabled {
      opacity: 0.65;
      background: #f8fafc;
    }

    @media (min-width: 769px) {
      font-size: 15px;
    }
  }

  .booking-error {
    margin: 0 0 12px;
    font-size: 13px;
    color: #b91c1c;
  }

  .booking-actions {
    display: flex;
    gap: 10px;
    margin-top: 6px;
  }

  .booking-btn {
    flex: 1;
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      transform: translateY(-1px);
    }
  }

  .booking-btn-submit {
    background: linear-gradient(135deg, #4fbd39, #2d8a47);
    color: #fff;
  }

  .booking-btn-cancel {
    background: #f1f5f9;
    color: #334155;
  }
`;

export const StyledCloseButton = styled.button`
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

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const StyledTutorialRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndexValues.TUTORIAL};
  pointer-events: none;
  animation: ${fadeIn} 0.25s ease;
`;

export const StyledTutorialBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  pointer-events: auto;
`;

export const StyledTutorialSpotlight = styled.div`
  position: fixed;
  border-radius: 12px;
  box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.55);
  pointer-events: none;
  transition:
    top 0.35s ease,
    left 0.35s ease,
    width 0.35s ease,
    height 0.35s ease;
  z-index: 1;
`;

export const StyledTutorialCard = styled.div<{
  $top: number;
  $left: number;
  $placement: string;
}>`
  position: fixed;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  z-index: 2;
  width: min(360px, calc(100vw - 32px));
  padding: 22px 20px 18px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.28);
  border: 1px solid rgba(79, 189, 57, 0.25);
  pointer-events: auto;
  animation: ${popIn} 0.3s ease;

  .tutorial-step-badge {
    display: inline-block;
    margin-bottom: 10px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #2d8a47;
    background: rgba(79, 189, 57, 0.12);
  }

  .tutorial-title {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.3;
  }

  .tutorial-description {
    margin: 0 0 18px;
    font-size: 14px;
    line-height: 1.55;
    color: #555;
  }

  .tutorial-progress {
    display: flex;
    gap: 6px;
    margin-bottom: 16px;
  }

  .tutorial-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background: #e2e8f0;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;

    &[data-active="true"] {
      background: #4fbd39;
      transform: scale(1.15);
    }
  }

  .tutorial-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }

  .tutorial-actions-left {
    display: flex;
    gap: 8px;
  }

  .tutorial-btn {
    border: none;
    border-radius: 10px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
  }

  .tutorial-btn-skip {
    background: transparent;
    color: #64748b;
    padding: 10px 8px;
  }

  .tutorial-btn-ghost {
    background: #f1f5f9;
    color: #334155;
  }

  .tutorial-btn-primary {
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    box-shadow: 0 6px 18px rgba(79, 189, 57, 0.3);
  }
`;

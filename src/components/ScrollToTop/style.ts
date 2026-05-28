import styled from "styled-components";
import { zIndexValues } from "@styles/zIndex";

export const StyledScrollToTop = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: 24px;
  bottom: 96px;
  z-index: ${zIndexValues.TOOLTIP};
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
  box-shadow: 0 8px 24px rgba(79, 189, 57, 0.4);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)"};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 12px 28px rgba(79, 189, 57, 0.5);
    transform: ${({ $visible }) =>
      $visible ? "translateY(-2px) scale(1.05)" : "translateY(12px) scale(0.9)"};
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    right: 16px;
    bottom: 88px;
    width: 44px;
    height: 44px;
  }
`;

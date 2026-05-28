import styled, { css } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

const placementStyles = {
  top: css`
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);

    &::after {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: #1e293b transparent transparent transparent;
    }
  `,
  bottom: css`
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);

    &::after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: transparent transparent #1e293b transparent;
    }
  `,
  left: css`
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);

    &::after {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-color: transparent transparent transparent #1e293b;
    }
  `,
  right: css`
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);

    &::after {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-color: transparent #1e293b transparent transparent;
    }
  `,
};

export const StyledTooltipWrap = styled.span<{ $displayContents?: boolean }>`
  position: relative;
  display: ${({ $displayContents }) =>
    $displayContents ? "contents" : "inline-flex"};
  align-items: center;
  vertical-align: middle;
`;

export const StyledTooltipBubble = styled.span<{
  $placement: TooltipPlacement;
  $visible: boolean;
}>`
  position: absolute;
  z-index: ${zIndexValues.TOOLTIP};
  width: max-content;
  max-width: min(280px, 85vw);
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.45;
  color: #ffffff;
  background: #1e293b;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  ${({ $placement }) => placementStyles[$placement]}

  &::after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
  }
`;

export const StyledInfoTrigger = styled.button<{ $variant?: "default" | "light" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-left: 6px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${({ $variant }) =>
    $variant === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(79, 189, 57, 0.15)"};
  color: ${({ $variant }) => ($variant === "light" ? "#ffffff" : "#3da82c")};
  font-size: 12px;
  cursor: help;
  flex-shrink: 0;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${({ $variant }) =>
      $variant === "light" ? "rgba(255, 255, 255, 0.35)" : "#4fbd39"};
    color: #ffffff;
    transform: scale(1.08);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px
      ${({ $variant }) =>
        $variant === "light"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(79, 189, 57, 0.4)"};
  }
`;

export const StyledFormLabelRow = styled.span`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`;

export const StyledRequiredMark = styled.span`
  color: #dc2626;
  margin-left: 2px;
  font-weight: 700;
`;

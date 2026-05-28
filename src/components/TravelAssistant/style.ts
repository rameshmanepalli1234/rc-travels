import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export const StyledFab = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9990;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #4fbd39 0%, #2d8a47 100%);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(79, 189, 57, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    right: 16px;
    bottom: 16px;
  }
`;

export const StyledPanel = styled.div`
  position: fixed;
  right: 24px;
  bottom: 92px;
  z-index: 9991;
  width: min(400px, calc(100vw - 32px));
  max-height: min(520px, calc(100vh - 120px));
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  border: 1px solid rgba(79, 189, 57, 0.25);

  @media (max-width: 480px) {
    right: 16px;
    left: 16px;
    width: auto;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #4fbd39 0%, #3a9e2e 100%);
  color: #fff;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }

  button {
    border: none;
    background: transparent;
    color: #fff;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    padding: 4px;
  }
`;

export const StyledMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8faf8;
  min-height: 200px;
`;

export const StyledBubble = styled.div<{ $role: "user" | "assistant" }>`
  align-self: ${({ $role }) => ($role === "user" ? "flex-end" : "flex-start")};
  max-width: 88%;
  padding: 10px 14px;
  border-radius: ${({ $role }) =>
    $role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px"};
  background: ${({ $role }) => ($role === "user" ? "#4fbd39" : "#fff")};
  color: ${({ $role }) => ($role === "user" ? "#fff" : "#333")};
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  box-shadow: ${({ $role }) =>
    $role === "assistant" ? "0 1px 4px rgba(0,0,0,0.08)" : "none"};
`;

export const StyledTyping = styled.div`
  display: flex;
  gap: 4px;
  padding: 10px 14px;
  align-self: flex-start;
  background: #fff;
  border-radius: 14px 14px 14px 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4fbd39;
    animation: ${pulse} 1.2s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const StyledAlert = styled.div`
  margin: 0 16px 8px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fef2f2;
  border: 1px solid #ef4444;
  color: #991b1b;
  font-size: 12px;
  line-height: 1.45;
`;

export const StyledInputRow = styled.form`
  display: flex;
  gap: 8px;
  padding: 12px 16px 16px;
  border-top: 1px solid #e8eee8;
  background: #fff;

  input {
    flex: 1;
    border: 1px solid #d0ddd0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #4fbd39;
    }

    &:disabled {
      opacity: 0.6;
    }
  }

  button {
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    background: #4fbd39;
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const StyledPoweredBy = styled.p`
  margin: 0;
  padding: 0 16px 10px;
  font-size: 10px;
  color: #888;
  text-align: center;
  background: #fff;

  .assistant-brand-highlight {
    font-weight: 700;
    color: #2d8a47;
    background: linear-gradient(90deg, #4fbd39 0%, #2d8a47 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

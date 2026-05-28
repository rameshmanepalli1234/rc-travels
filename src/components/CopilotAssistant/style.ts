import styled from "styled-components";

export const StyledCopilotSetupBanner = styled.div`
  position: fixed;
  bottom: 88px;
  right: 24px;
  z-index: 9998;
  max-width: min(360px, calc(100vw - 48px));
  padding: 14px 16px;
  border-radius: 12px;
  background: #fff8e6;
  border: 1px solid #f59e0b;
  color: #92400e;
  font-size: 13px;
  line-height: 1.5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  p {
    margin: 8px 0 0;
  }

  code {
    font-size: 12px;
    background: rgba(0, 0, 0, 0.06);
    padding: 2px 6px;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    right: 16px;
    left: 16px;
    max-width: none;
  }
`;

export const StyledCopilotErrorBanner = styled(StyledCopilotSetupBanner)`
  background: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
`;

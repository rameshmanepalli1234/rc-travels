import styled from "styled-components";

export const StyledTravelInsights = styled.section`
  position: relative;
  width: 100%;
  padding: 60px 24px 80px;
  overflow: hidden;
  background: linear-gradient(
    155deg,
    #0a1f1c 0%,
    #123a34 28%,
    #1a5248 55%,
    #1f6356 78%,
    #164238 100%
  );

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    width: min(520px, 90vw);
    height: min(520px, 90vw);
    top: -180px;
    right: -120px;
    background: radial-gradient(
      circle,
      rgba(127, 224, 106, 0.22) 0%,
      transparent 68%
    );
  }

  &::after {
    width: min(420px, 80vw);
    height: min(420px, 80vw);
    bottom: -140px;
    left: -100px;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.14) 0%,
      transparent 70%
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .travel-insights-content {
    max-width: 1100px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 48px 16px 64px;
  }

  .travel-insights-header {
    max-width: 720px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .travel-insights-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9ef08a;
    margin-bottom: 12px;
  }

  .travel-insights-title {
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
    line-height: 1.2;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .travel-insights-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

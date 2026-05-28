import styled from "styled-components";

export const StyledTripCtaBanner = styled.section`
  width: calc(100% - 48px);
  max-width: 1100px;
  margin: 56px auto 48px;
  padding: 40px 36px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4fbd39 0%, #2d8a47 55%, #1e6b38 100%);
  box-shadow: 0 16px 48px rgba(79, 189, 57, 0.35);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    right: -40px;
    top: -40px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 28px 22px;
    flex-direction: column;
    text-align: center;
  }

  .cta-content {
    position: relative;
    z-index: 1;
    flex: 1;
    min-width: 240px;
  }

  .cta-eyebrow {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 8px;
  }

  .cta-title {
    margin: 0 0 10px;
    font-size: 28px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.25;

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  .cta-text {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.92);
    max-width: 520px;

    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .cta-actions {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }

  .cta-btn {
    border: none;
    border-radius: 12px;
    padding: 14px 24px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .cta-btn-light {
    background: #ffffff;
    color: #2d8a47;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  .cta-btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.75);

    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
`;

import styled from "styled-components";

export const StyledHowItWorks = styled.section`
  width: 100%;
  padding: 64px 24px 72px;
  background: #0f172a;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 80% 60% at 50% 0%,
      rgba(79, 189, 57, 0.18) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 48px 16px 56px;
  }

  .how-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
  }

  .how-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 48px;
  }

  .how-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #86efac;
    margin-bottom: 12px;
  }

  .how-title {
    margin: 0 0 14px;
    font-size: 36px;
    font-weight: 800;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .how-subtitle {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
  }

  .how-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    position: relative;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .how-connector {
    position: absolute;
    top: 56px;
    left: 18%;
    right: 18%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(79, 189, 57, 0.5) 20%,
      rgba(79, 189, 57, 0.5) 80%,
      transparent
    );

    @media (max-width: 900px) {
      display: none;
    }
  }

  .how-step {
    text-align: center;
    padding: 28px 22px 26px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    transition:
      transform 0.3s ease,
      background 0.3s ease,
      border-color 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(79, 189, 57, 0.45);
    }
  }

  .how-step-icon-wrap {
    width: 64px;
    height: 64px;
    margin: 0 auto 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #ffffff;
    background: linear-gradient(135deg, #4fbd39 0%, #2d8a47 100%);
    box-shadow: 0 8px 24px rgba(79, 189, 57, 0.35);
  }

  .how-step-number {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #86efac;
  }

  .how-step-title {
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .how-step-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.75);
  }

  .how-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;
    margin-top: 40px;
  }

  .how-btn {
    border: none;
    border-radius: 12px;
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .how-btn-primary {
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    box-shadow: 0 8px 24px rgba(79, 189, 57, 0.35);
  }

  .how-btn-secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.35);

    &:hover {
      border-color: #4fbd39;
      color: #86efac;
    }
  }
`;

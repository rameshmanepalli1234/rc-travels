import styled from "styled-components";

export const StyledWhyChooseUs = styled.section`
  width: 100%;
  padding: 64px 24px 72px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    #ffffff 0%,
    #f4fbf2 18%,
    #e8f8e6 38%,
    #d4f1d0 58%,
    #ecfdf5 78%,
    #ffffff 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: min(900px, 100%);
    height: 320px;
    background: radial-gradient(
      ellipse at center,
      rgba(79, 189, 57, 0.14) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 280px;
    height: 280px;
    background: radial-gradient(
      circle at 100% 100%,
      rgba(45, 138, 71, 0.08) 0%,
      transparent 65%
    );
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 48px 16px 56px;
  }

  .why-header {
    max-width: 720px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .why-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 12px;
  }

  .why-title {
    margin: 0 0 14px;
    font-size: 38px;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  .why-subtitle {
    margin: 0;
    font-size: 17px;
    line-height: 1.6;
    color: #555;
  }

  .why-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    max-width: 1000px;
    margin: 0 auto 40px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }
  }

  .why-stat-card {
    text-align: center;
    padding: 22px 16px;
    border-radius: 14px;
    background: #ffffff;
    border: 1px solid rgba(79, 189, 57, 0.2);
    box-shadow: 0 8px 24px rgba(79, 189, 57, 0.08);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 32px rgba(79, 189, 57, 0.16);
    }
  }

  .why-stat-value {
    display: block;
    font-size: 28px;
    font-weight: 800;
    color: #2d8a47;
    margin-bottom: 6px;
  }

  .why-stat-label {
    font-size: 14px;
    font-weight: 600;
    color: #555;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .why-card {
    display: flex;
    gap: 16px;
    padding: 22px 20px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid #e8f5e6;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.25s ease,
      border-color 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba(79, 189, 57, 0.45);
    }
  }

  .why-card-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #ffffff;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
  }

  .why-card-title {
    margin: 0 0 8px;
    font-size: 17px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .why-card-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.55;
    color: #555;
  }
`;

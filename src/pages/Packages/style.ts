import styled from "styled-components";

export const StyledPackages = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, #f8faf8 0%, #ffffff 45%, #f4f9f3 100%);
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 48px 12px 64px;
  }

  .packages-header {
    max-width: 720px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .packages-eyebrow {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 12px;
  }

  .packages-title {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .packages-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #555;
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
  }
`;

export const StyledPackageCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(79, 189, 57, 0.12);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(79, 189, 57, 0.18);
  }

  .package-card-image-wrap {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .package-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover .package-card-image {
    transform: scale(1.06);
  }

  .package-card-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: #4fbd39;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 6px 12px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(79, 189, 57, 0.35);
  }

  .package-card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 22px 22px 24px;
    gap: 12px;
  }

  .package-card-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #4fbd39;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .package-card-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
    margin: 0;
  }

  .package-card-duration {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }

  .package-card-price-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    padding: 14px 0 4px;
    border-top: 1px solid #eee;
    margin-top: 4px;
  }

  .package-card-price {
    font-size: 28px;
    font-weight: 800;
    color: #4fbd39;
    line-height: 1;
  }

  .package-card-price-note {
    font-size: 13px;
    font-weight: 500;
    color: #888;
  }

  .package-card-highlights {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .package-card-highlight {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    color: #444;
    line-height: 1.45;

    &::before {
      content: "✓";
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(79, 189, 57, 0.15);
      color: #4fbd39;
      font-size: 11px;
      font-weight: 700;
      border-radius: 50%;
      margin-top: 1px;
    }
  }

  .package-card-cta {
    margin-top: 8px;
    width: 100%;
    padding: 14px 20px;
    border: none;
    font-family: inherit;
    border-radius: 10px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    text-decoration: none;
    text-align: center;
    display: block;
    box-sizing: border-box;

    &:hover {
      opacity: 0.92;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

import styled from "styled-components";

export const StyledPackageInsightsChart = styled.section<{
  $embedded?: boolean;
}>`
  max-width: ${({ $embedded }) => ($embedded ? "1000px" : "900px")};
  margin: ${({ $embedded }) => ($embedded ? "0 auto" : "0 auto 48px")};
  padding: 32px 28px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: ${({ $embedded }) =>
    $embedded
      ? "0 20px 56px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.08)"
      : "0 12px 40px rgba(0, 0, 0, 0.07)"};
  border: 1px solid
    ${({ $embedded }) =>
      $embedded ? "rgba(255, 255, 255, 0.35)" : "rgba(79, 189, 57, 0.15)"};

  @media (max-width: 768px) {
    padding: 24px 18px;
    margin-bottom: 40px;
  }

  .insights-header {
    text-align: center;
    margin-bottom: 28px;
  }

  .insights-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 10px;
  }

  .insights-title {
    font-size: 26px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 10px;
  }

  .insights-subtitle {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin: 0;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }

  .insights-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    padding-bottom: 28px;
    border-bottom: 1px solid #e8efe6;

    @media (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .insights-stat {
    text-align: center;
    padding: 12px 8px;
    border-radius: 12px;
    background: linear-gradient(180deg, #f8fcf7 0%, #ffffff 100%);
  }

  .insights-stat-value {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #2d7a22;
    line-height: 1.2;
    margin-bottom: 4px;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .insights-stat-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #666;
  }

  .insights-chart-caption {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin: 0 0 20px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .insights-bars {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .insights-bar-row {
    display: grid;
    grid-template-columns: minmax(120px, 34%) 1fr 36px;
    align-items: center;
    gap: 12px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
      gap: 6px;
    }
  }

  .insights-bar-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    line-height: 1.3;
  }

  .insights-bar-track {
    height: 14px;
    border-radius: 999px;
    background: #eef4ec;
    overflow: hidden;
  }

  .insights-bar-fill {
    height: 100%;
    border-radius: 999px;
    min-width: 4px;
    transition: width 0.6s ease;
  }

  .insights-bar-value {
    font-size: 15px;
    font-weight: 700;
    color: #4fbd39;
    text-align: right;

    @media (max-width: 520px) {
      text-align: left;
    }
  }
`;

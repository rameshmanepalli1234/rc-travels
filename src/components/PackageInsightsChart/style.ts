import styled from "styled-components";

export const StyledPackageInsightsChart = styled.section<{
  $embedded?: boolean;
}>`
  max-width: ${({ $embedded }) => ($embedded ? "1100px" : "900px")};
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

  .insights-chart {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e8efe6;
  }

  .insights-charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: stretch;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }

  .insights-viz-card {
    padding: 20px 18px;
    border-radius: 16px;
    background: linear-gradient(180deg, #f8fcf7 0%, #ffffff 100%);
    border: 1px solid #e8efe6;
    min-height: 280px;
  }

  .insights-pie-layout {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .insights-pie-svg {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
  }

  .insights-pie-center-value {
    font-size: 22px;
    font-weight: 700;
    fill: #2d7a22;
  }

  .insights-pie-center-label {
    font-size: 11px;
    font-weight: 600;
    fill: #666;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .insights-pie-legend {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .insights-pie-legend-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .insights-pie-legend-swatch {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    margin-top: 4px;
    flex-shrink: 0;
  }

  .insights-pie-legend-text {
    font-size: 13px;
    font-weight: 600;
    color: #333;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
  }

  .insights-pie-legend-meta {
    font-size: 12px;
    font-weight: 500;
    color: #666;
  }

  .insights-vertical-bar-svg {
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .insights-bar-grid-line {
    stroke: #e8efe6;
    stroke-width: 1;
  }

  .insights-bar-axis-label {
    font-size: 10px;
    fill: #888;
    text-anchor: end;
  }

  .insights-bar-value-label {
    font-size: 11px;
    font-weight: 700;
    fill: #2d7a22;
  }

  .insights-bar-category-label {
    font-size: 10px;
    fill: #555;
  }

  .insights-chart-empty {
    font-size: 14px;
    color: #888;
    text-align: center;
    margin: 40px 0;
  }
`;

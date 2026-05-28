import {
  formatPackagePrice,
  getPackageInsightsSummary,
  getTravelThemeChartData,
  maxChartValue,
  type ChartDatum,
} from "@utils";
import { StyledPackageInsightsChart } from "./style";

const BAR_COLORS = [
  "#4fbd39",
  "#3da82c",
  "#2d8f24",
  "#5ec94a",
  "#6ed35c",
  "#88dc72",
] as const;

const colorForIndex = (index: number): string =>
  BAR_COLORS[index % BAR_COLORS.length];

const buildChartAriaLabel = (data: ChartDatum[]): string =>
  data
    .map((item) => `${item.label}: ${item.value} packages`)
    .join("; ");

type PackageInsightsChartProps = {
  showHeader?: boolean;
};

const PackageInsightsChart = ({
  showHeader = true,
}: PackageInsightsChartProps) => {
  const chartData = getTravelThemeChartData();
  const summary = getPackageInsightsSummary();
  const peak = maxChartValue(chartData);

  return (
    <StyledPackageInsightsChart $embedded={!showHeader}>
      {showHeader && (
        <header className="insights-header">
          <span className="insights-eyebrow">Travel Insights</span>
          <h3 className="insights-title">Tour Portfolio at a Glance</h3>
          <p className="insights-subtitle">
            How our curated packages spread across travel styles — counted from
            your live tour catalogue.
          </p>
        </header>
      )}

      <div className="insights-summary">
        <div className="insights-stat">
          <span className="insights-stat-value">{summary.totalPackages}</span>
          <span className="insights-stat-label">Listed tours</span>
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">{summary.regionsCovered}</span>
          <span className="insights-stat-label">Regions covered</span>
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">
            {formatPackagePrice(summary.lowestPrice)}
          </span>
          <span className="insights-stat-label">Starting from</span>
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">
            {formatPackagePrice(summary.averagePrice)}
          </span>
          <span className="insights-stat-label">Average package</span>
        </div>
      </div>

      <div
        className="insights-chart"
        role="img"
        aria-label={`Tour packages by travel style. ${buildChartAriaLabel(chartData)}`}
      >
        <p className="insights-chart-caption">Packages by travel style</p>
        <ul className="insights-bars">
          {chartData.map((item, index) => {
            const widthPercent = Math.round((item.value / peak) * 100);

            return (
              <li key={item.label} className="insights-bar-row">
                <span className="insights-bar-label">{item.label}</span>
                <div className="insights-bar-track">
                  <div
                    className="insights-bar-fill"
                    style={{
                      width: `${widthPercent}%`,
                      backgroundColor: colorForIndex(index),
                    }}
                  />
                </div>
                <span className="insights-bar-value">{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledPackageInsightsChart>
  );
};

export default PackageInsightsChart;

import InsightsPieChart from "@components/charts/InsightsPieChart";
import InsightsVerticalBarChart from "@components/charts/InsightsVerticalBarChart";
import {
  formatPackagePrice,
  getPackageInsightsSummary,
  getPriceTierChartData,
  getRegionChartData,
  getTravelThemeChartData,
  groupChartDataWithOther,
  maxChartValue,
  type ChartDatum,
} from "@utils";
import StatLabelWithInfo from "@components/Tooltip/StatLabelWithInfo";
import InfoTooltip from "@components/Tooltip/InfoTooltip";
import { TOOLTIPS } from "@utils";
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
  const regionPieData = groupChartDataWithOther(getRegionChartData(), 6);
  const priceTierBarData = getPriceTierChartData();
  const summary = getPackageInsightsSummary();
  const peak = maxChartValue(chartData);

  const regionPieAria = regionPieData
    .map((item) => `${item.label}: ${item.value} packages`)
    .join("; ");
  const priceBarAria = priceTierBarData
    .map((item) => `${item.label}: ${item.value} packages`)
    .join("; ");

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
          <StatLabelWithInfo
            className="insights-stat-label"
            label="Listed tours"
            tooltip={TOOLTIPS.insights.listedTours}
          />
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">{summary.regionsCovered}</span>
          <StatLabelWithInfo
            className="insights-stat-label"
            label="Regions covered"
            tooltip={TOOLTIPS.insights.regions}
          />
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">
            {formatPackagePrice(summary.lowestPrice)}
          </span>
          <StatLabelWithInfo
            label="Starting from"
            tooltip={TOOLTIPS.insights.startingFrom}
          />
        </div>
        <div className="insights-stat">
          <span className="insights-stat-value">
            {formatPackagePrice(summary.averagePrice)}
          </span>
          <StatLabelWithInfo
            className="insights-stat-label"
            label="Average package"
            tooltip={TOOLTIPS.insights.average}
          />
        </div>
      </div>

      <div
        className="insights-chart"
        role="img"
        aria-label={`Tour packages by travel style. ${buildChartAriaLabel(chartData)}`}
      >
        <p className="insights-chart-caption">
          Packages by travel style
          <InfoTooltip
            content={TOOLTIPS.insights.travelStyle}
            placement="top"
            ariaLabel="About travel style chart"
          />
        </p>
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

      <div className="insights-charts-grid">
        <InsightsPieChart
          title="Packages by region"
          data={regionPieData}
          ariaLabel={`Regional distribution pie chart. ${regionPieAria}`}
          titleTooltip={TOOLTIPS.insights.regionChart}
        />
        <InsightsVerticalBarChart
          title="Packages by price tier"
          data={priceTierBarData}
          ariaLabel={`Price tier bar chart. ${priceBarAria}`}
          titleTooltip={TOOLTIPS.insights.priceTier}
        />
      </div>
    </StyledPackageInsightsChart>
  );
};

export default PackageInsightsChart;

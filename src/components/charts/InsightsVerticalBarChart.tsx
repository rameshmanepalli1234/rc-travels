import { maxChartValue, type ChartDatum } from "@utils";
import { colorForChartIndex } from "./chartTheme";

type InsightsVerticalBarChartProps = {
  title: string;
  data: ChartDatum[];
  ariaLabel: string;
};

const CHART_WIDTH = 400;
const CHART_HEIGHT = 240;
const PADDING = { top: 16, right: 12, bottom: 72, left: 36 };
const PLOT_WIDTH = CHART_WIDTH - PADDING.left - PADDING.right;
const PLOT_HEIGHT = CHART_HEIGHT - PADDING.top - PADDING.bottom;

const truncateLabel = (label: string, maxLen = 14): string =>
  label.length > maxLen ? `${label.slice(0, maxLen - 1)}…` : label;

const InsightsVerticalBarChart = ({
  title,
  data,
  ariaLabel,
}: InsightsVerticalBarChartProps) => {
  const peak = maxChartValue(data);
  const barCount = data.length;
  const barGap = barCount > 1 ? 10 : 0;
  const barWidth =
    barCount > 0 ? (PLOT_WIDTH - barGap * (barCount - 1)) / barCount : 0;

  return (
    <div className="insights-viz-card" role="img" aria-label={ariaLabel}>
      <p className="insights-chart-caption">{title}</p>
      {barCount > 0 ? (
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className="insights-vertical-bar-svg"
          aria-hidden
        >
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const y = PADDING.top + PLOT_HEIGHT * (1 - tick);
            const value = Math.round(peak * tick);

            return (
              <g key={tick}>
                <line
                  x1={PADDING.left}
                  y1={y}
                  x2={PADDING.left + PLOT_WIDTH}
                  y2={y}
                  className="insights-bar-grid-line"
                />
                <text x={PADDING.left - 8} y={y + 4} className="insights-bar-axis-label">
                  {value}
                </text>
              </g>
            );
          })}

          {data.map((item, index) => {
            const heightRatio = item.value / peak;
            const barHeight = PLOT_HEIGHT * heightRatio;
            const x = PADDING.left + index * (barWidth + barGap);
            const y = PADDING.top + PLOT_HEIGHT - barHeight;

            return (
              <g key={item.label}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={6}
                  fill={colorForChartIndex(index)}
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 6}
                  textAnchor="middle"
                  className="insights-bar-value-label"
                >
                  {item.value}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={PADDING.top + PLOT_HEIGHT + 18}
                  textAnchor="middle"
                  className="insights-bar-category-label"
                >
                  {truncateLabel(item.label)}
                </text>
              </g>
            );
          })}
        </svg>
      ) : (
        <p className="insights-chart-empty">No data available</p>
      )}
    </div>
  );
};

export default InsightsVerticalBarChart;

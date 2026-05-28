import type { ChartDatum } from "@utils";
import {
  buildPieSlices,
  describePieSlice,
  type PieSliceDatum,
} from "./chartTheme";

type InsightsPieChartProps = {
  title: string;
  data: ChartDatum[];
  ariaLabel: string;
};

const PIE_SIZE = 220;
const PIE_CENTER = PIE_SIZE / 2;
const PIE_RADIUS = 88;

const InsightsPieChart = ({ title, data, ariaLabel }: InsightsPieChartProps) => {
  const slices = buildPieSlices(data);
  const hasData = slices.length > 0;

  return (
    <div className="insights-viz-card" role="img" aria-label={ariaLabel}>
      <p className="insights-chart-caption">{title}</p>
      {hasData ? (
        <div className="insights-pie-layout">
          <svg
            viewBox={`0 0 ${PIE_SIZE} ${PIE_SIZE}`}
            className="insights-pie-svg"
            aria-hidden
          >
            {slices.map((slice: PieSliceDatum) => (
              <path
                key={slice.label}
                d={describePieSlice(
                  PIE_CENTER,
                  PIE_CENTER,
                  PIE_RADIUS,
                  slice.startAngle,
                  slice.endAngle,
                )}
                fill={slice.color}
                stroke="#ffffff"
                strokeWidth={2}
              />
            ))}
            <circle
              cx={PIE_CENTER}
              cy={PIE_CENTER}
              r={42}
              fill="#ffffff"
            />
            <text
              x={PIE_CENTER}
              y={PIE_CENTER - 4}
              textAnchor="middle"
              className="insights-pie-center-value"
            >
              {data.reduce((sum, item) => sum + item.value, 0)}
            </text>
            <text
              x={PIE_CENTER}
              y={PIE_CENTER + 14}
              textAnchor="middle"
              className="insights-pie-center-label"
            >
              tours
            </text>
          </svg>
          <ul className="insights-pie-legend">
            {slices.map((slice) => (
              <li key={slice.label} className="insights-pie-legend-item">
                <span
                  className="insights-pie-legend-swatch"
                  style={{ backgroundColor: slice.color }}
                  aria-hidden
                />
                <span className="insights-pie-legend-text">
                  {slice.label}
                  <span className="insights-pie-legend-meta">
                    {slice.value} ({slice.percent.toFixed(0)}%)
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="insights-chart-empty">No data available</p>
      )}
    </div>
  );
};

export default InsightsPieChart;

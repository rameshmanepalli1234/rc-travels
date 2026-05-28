export const CHART_COLORS = [
  "#4fbd39",
  "#3da82c",
  "#2d8f24",
  "#5ec94a",
  "#6ed35c",
  "#38bdf8",
  "#f59e0b",
  "#a78bfa",
  "#f472b6",
  "#94a3b8",
] as const;

export const colorForChartIndex = (index: number): string =>
  CHART_COLORS[index % CHART_COLORS.length];

export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleDegrees: number,
): { x: number; y: number } => {
  const angleRadians = ((angleDegrees - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleRadians),
    y: centerY + radius * Math.sin(angleRadians),
  };
};

export type PieSliceDatum = {
  label: string;
  value: number;
  percent: number;
  color: string;
  startAngle: number;
  endAngle: number;
};

/** Build pie slice angles from chart data (values must be > 0) */
export const buildPieSlices = (
  data: ReadonlyArray<{ label: string; value: number }>,
): PieSliceDatum[] => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  if (total <= 0) {
    return [];
  }

  let cursor = 0;

  return data.map((item, index) => {
    const percent = (item.value / total) * 100;
    const sweep = (item.value / total) * 360;
    const startAngle = cursor;
    const endAngle = cursor + sweep;
    cursor = endAngle;

    return {
      label: item.label,
      value: item.value,
      percent,
      color: colorForChartIndex(index),
      startAngle,
      endAngle,
    };
  });
};

export const describePieSlice = (
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number,
): string => {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${centerX} ${centerY}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
};

export declare const CHART_COLORS: readonly ["#4fbd39", "#3da82c", "#2d8f24", "#5ec94a", "#6ed35c", "#38bdf8", "#f59e0b", "#a78bfa", "#f472b6", "#94a3b8"];
export declare const colorForChartIndex: (index: number) => string;
export declare const polarToCartesian: (centerX: number, centerY: number, radius: number, angleDegrees: number) => {
    x: number;
    y: number;
};
export type PieSliceDatum = {
    label: string;
    value: number;
    percent: number;
    color: string;
    startAngle: number;
    endAngle: number;
};
export declare const buildPieSlices: (data: ReadonlyArray<{
    label: string;
    value: number;
}>) => PieSliceDatum[];
export declare const describePieSlice: (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => string;
//# sourceMappingURL=chartTheme.d.ts.map
import type { TravelPackage } from "./packagesUtils";
export type ChartDatum = {
    label: string;
    value: number;
};
export type PackageInsightsSummary = {
    totalPackages: number;
    regionsCovered: number;
    lowestPrice: number;
    averagePrice: number;
};
export declare const extractRegionFromLocation: (location: string) => string;
export declare const categorizePackageTheme: (pkg: TravelPackage) => string;
export declare const getTravelThemeChartData: (packages?: readonly TravelPackage[]) => ChartDatum[];
export declare const getRegionChartData: (packages?: readonly TravelPackage[], limit?: number) => ChartDatum[];
export declare const getPackageInsightsSummary: (packages?: readonly TravelPackage[]) => PackageInsightsSummary;
export declare const maxChartValue: (data: ChartDatum[]) => number;
//# sourceMappingURL=packageChartUtils.d.ts.map
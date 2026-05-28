import type { TravelPackage } from "./packagesUtils";
import { packagesTableUtils } from "./packagesUtils";

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

const REGION_ALIASES: Record<string, string> = {
  Rajamahendravaram: "Andhra Pradesh",
  "North & South Goa": "Goa",
  "Port Blair & Havelock": "Andaman & Nicobar",
  "Leh, Ladakh": "Ladakh",
  Gujarat: "Gujarat",
  Meghalaya: "Meghalaya",
  "Himachal Pradesh": "Himachal Pradesh",
};

/** State / region from package location string */
export const extractRegionFromLocation = (location: string): string => {
  const trimmed = location.trim();
  const alias = REGION_ALIASES[trimmed];
  if (alias) {
    return alias;
  }

  const commaIndex = trimmed.lastIndexOf(",");
  if (commaIndex >= 0) {
    return trimmed.slice(commaIndex + 1).trim();
  }

  return trimmed;
};

const THEME_RULES: ReadonlyArray<{
  label: string;
  pattern: RegExp;
}> = [
  {
    label: "Spiritual & Pilgrimage",
    pattern:
      /pilgrim|spiritual|temple|tirumala|darshan|varanasi|ganga aarti|rameswaram|ayodhya|madurai|meenakshi|sarnath|aarti/i,
  },
  {
    label: "Beach & Islands",
    pattern:
      /beach|goa|vizag|visakhapatnam|andaman|havelock|island|coastal|water sports|shikara/i,
  },
  {
    label: "Adventure & Outdoors",
    pattern:
      /adventure|rafting|ladakh|nubra|pangong|trek|snow|rohtang|solang|wildlife|safari|rafting/i,
  },
  {
    label: "Hills & Nature",
    pattern:
      /araku|valley|hill|ooty|munnar|kodaikanal|coorg|shimla|manali|nainital|mussoorie|darjeeling|meghalaya|cherrapunji|papikondalu|scenic|plantation|backwater/i,
  },
  {
    label: "Heritage & Culture",
    pattern:
      /heritage|fort|palace|pink city|taj mahal|hampi|jaipur|udaipur|agra|culture|chokhi|amber|ajanta|ellora|aurangabad/i,
  },
];

const DEFAULT_THEME = "City & Getaways";

/** Primary travel style for a package (first matching rule) */
export const categorizePackageTheme = (pkg: TravelPackage): string => {
  const text = `${pkg.title} ${pkg.location} ${pkg.highlights.join(" ")}`;

  for (const rule of THEME_RULES) {
    if (rule.pattern.test(text)) {
      return rule.label;
    }
  }

  return DEFAULT_THEME;
};

const countByKey = (
  packages: readonly TravelPackage[],
  keyFn: (pkg: TravelPackage) => string,
): ChartDatum[] => {
  const counts = new Map<string, number>();

  for (const pkg of packages) {
    const key = keyFn(pkg);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
};

/** Tour styles across the full catalogue (table data) */
export const getTravelThemeChartData = (
  packages: readonly TravelPackage[] = packagesTableUtils,
): ChartDatum[] => countByKey(packages, categorizePackageTheme);

/** Top regions by number of listed packages */
export const getRegionChartData = (
  packages: readonly TravelPackage[] = packagesTableUtils,
  limit = 8,
): ChartDatum[] =>
  countByKey(packages, (pkg) => extractRegionFromLocation(pkg.location)).slice(
    0,
    limit,
  );

export const getPackageInsightsSummary = (
  packages: readonly TravelPackage[] = packagesTableUtils,
): PackageInsightsSummary => {
  const prices = packages.map((pkg) => pkg.price);
  const regions = new Set(
    packages.map((pkg) => extractRegionFromLocation(pkg.location)),
  );

  const total = prices.length;
  const sum = prices.reduce((acc, price) => acc + price, 0);

  return {
    totalPackages: total,
    regionsCovered: regions.size,
    lowestPrice: total > 0 ? Math.min(...prices) : 0,
    averagePrice: total > 0 ? Math.round(sum / total) : 0,
  };
};

export const maxChartValue = (data: ChartDatum[]): number =>
  data.reduce((max, item) => Math.max(max, item.value), 0) || 1;

/** Keep top N items; merge remainder into "Other" */
export const groupChartDataWithOther = (
  data: ChartDatum[],
  topN: number,
): ChartDatum[] => {
  if (data.length <= topN) {
    return data;
  }

  const top = data.slice(0, topN);
  const otherValue = data
    .slice(topN)
    .reduce((sum, item) => sum + item.value, 0);

  if (otherValue > 0) {
    top.push({ label: "Other", value: otherValue });
  }

  return top;
};

const PRICE_TIER_RULES: ReadonlyArray<{ label: string; max: number }> = [
  { label: "Budget (under ₹8k)", max: 7999 },
  { label: "Mid (₹8k – ₹15k)", max: 15000 },
  { label: "Premium (above ₹15k)", max: Number.POSITIVE_INFINITY },
];

/** Package count by price tier */
export const getPriceTierChartData = (
  packages: readonly TravelPackage[] = packagesTableUtils,
): ChartDatum[] => {
  const counts = PRICE_TIER_RULES.map((tier) => ({
    label: tier.label,
    value: 0,
    max: tier.max,
  }));

  for (const pkg of packages) {
    const tierIndex = PRICE_TIER_RULES.findIndex((tier) => pkg.price <= tier.max);
    if (tierIndex >= 0) {
      counts[tierIndex].value += 1;
    }
  }

  return counts.map(({ label, value }) => ({ label, value }));
};

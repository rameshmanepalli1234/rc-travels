import type { TravelPackage } from "./packagesUtils";
import { formatPackagePrice } from "./packagesUtils";

export const buildPackageDescription = (
  pkg: TravelPackage,
  plannedTripDate?: string,
): string => {
  const lines: string[] = [];

  if (plannedTripDate?.trim()) {
    lines.push(
      `Preferred travel date: ${formatPlannedTripDate(plannedTripDate)}`,
      `Date (ISO): ${plannedTripDate.trim()}`,
      "",
    );
  }

  lines.push(
    `Location: ${pkg.location}`,
    `Duration: ${pkg.duration}`,
    `Price: ${formatPackagePrice(pkg.price)} per person`,
    "",
    "Highlights:",
    ...pkg.highlights.map((item) => `• ${item}`),
  );

  return lines.join("\n");
};

export type PackageBookingForm = {
  email: string;
  phone: string;
};

export const isValidBookingEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const isValidBookingPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
};

/** ISO date YYYY-MM-DD — today or a future day */
export const isValidPlannedTripDate = (dateStr: string): boolean => {
  const trimmed = dateStr.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return false;
  }

  const planned = new Date(`${trimmed}T12:00:00`);
  if (Number.isNaN(planned.getTime())) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  planned.setHours(0, 0, 0, 0);
  return planned >= today;
};

export const formatPlannedTripDate = (isoDate: string): string =>
  new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate.trim()}T12:00:00`));

export const minPlannedTripDateIso = (): string => {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const isoDateFromDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const dateFromIso = (isoDate: string): Date | null => {
  const trimmed = isoDate.trim();
  if (!trimmed) {
    return null;
  }

  const parsed = new Date(`${trimmed}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

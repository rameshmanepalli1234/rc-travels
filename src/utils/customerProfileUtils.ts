import type { CustomerProfile } from "@/types/customerProfile";

export const splitDisplayName = (
  name: string,
): { firstName: string; lastName: string } => {
  const trimmed = name.trim();
  if (!trimmed) {
    return { firstName: "", lastName: "" };
  }

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
};

export const buildFullName = (
  firstName: string,
  lastName: string,
): string => [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");

export const isProfileComplete = (profile: CustomerProfile | null): boolean => {
  if (!profile) {
    return false;
  }

  const first =
    profile.first_name?.trim() ||
    splitDisplayName(profile.full_name).firstName;
  const digits = profile.phone.replace(/\D/g, "");

  return first.length >= 2 && digits.length >= 10;
};

export const getProfileFirstName = (profile: CustomerProfile): string =>
  profile.first_name?.trim() ||
  splitDisplayName(profile.full_name).firstName;

export const getProfileLastName = (profile: CustomerProfile): string =>
  profile.last_name?.trim() ||
  splitDisplayName(profile.full_name).lastName;

import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export const BRAND_NAME = "Ramesh Tours & Travels";

export const CONTACT_PHONE_DISPLAY = "+91 6363620044";
export const CONTACT_PHONE_TEL = "tel:+916363620044";
export const CONTACT_EMAIL = "rameshtravelszone@gmail.com";
export const CONTACT_EMAIL_MAILTO = "mailto:rameshtravelszone@gmail.com";
export const CONTACT_ADDRESS =
  "Near Vartha Office, Morampudi, Rajamahendravaram, Andhra Pradesh, 533107";
export const CONTACT_HOURS = "Mon - Sat: 9:00 AM - 9:00 PM";

/** Allows letters and spaces only (e.g. Ramesh Manepalli) */
export const sanitizeNameInput = (value: string): string =>
  value.replace(/[^\p{L}\s]/gu, "").replace(/\s{2,}/g, " ");

/** Allows digits, spaces, and a single leading + (e.g. +91 6363620044) */
export const sanitizePhoneInput = (value: string): string => {
  const cleaned = value.replace(/[^\d+\s]/g, "");
  const hasLeadingPlus = cleaned.trimStart().startsWith("+");
  const withoutPlus = cleaned.replace(/\+/g, "");
  return hasLeadingPlus ? `+${withoutPlus}` : withoutPlus;
};

export type ContactInfoItem = {
  id: string;
  title: string;
  value: string;
  href?: string;
  Icon: IconType;
};

export const contactInfoUtils: ContactInfoItem[] = [
  {
    id: "phone",
    title: "Call Us",
    value: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_TEL,
    Icon: FaPhone,
  },
  {
    id: "email",
    title: "Email Us",
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_MAILTO,
    Icon: FaEnvelope,
  },
  {
    id: "address",
    title: "Visit Us",
    value: CONTACT_ADDRESS,
    Icon: FaMapMarkerAlt,
  },
  {
    id: "hours",
    title: "Working Hours",
    value: CONTACT_HOURS,
    Icon: FaClock,
  },
];

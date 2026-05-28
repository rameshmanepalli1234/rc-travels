import type { IconType } from "react-icons";
export declare const BRAND_NAME = "Ramesh Tours & Travels";
export declare const CONTACT_PHONE_DISPLAY = "+91 6363620044";
export declare const CONTACT_PHONE_TEL = "tel:+916363620044";
export declare const CONTACT_EMAIL = "rameshtravelszone@gmail.com";
export declare const CONTACT_EMAIL_MAILTO = "mailto:rameshtravelszone@gmail.com";
export declare const CONTACT_ADDRESS = "Near Vartha Office, Morampudi, Rajamahendravaram, Andhra Pradesh, 533107";
export declare const CONTACT_HOURS = "Mon - Sat: 9:00 AM - 9:00 PM";
export declare const GODAVARI_MAP_EMBED_URL: string;
export declare const GODAVARI_MAP_DIRECTIONS_URL: string;
export declare const sanitizeNameInput: (value: string) => string;
export declare const sanitizePhoneInput: (value: string) => string;
export type ContactInfoItem = {
    id: string;
    title: string;
    value: string;
    href?: string;
    Icon: IconType;
};
export declare const contactInfoUtils: ContactInfoItem[];
//# sourceMappingURL=contactUtils.d.ts.map
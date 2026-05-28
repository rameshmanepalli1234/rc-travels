export const SECTION_IDS = {
  HOME: "home",
  ABOUT_US: "aboutus",
  SERVICES: "services",
  PACKAGES: "packages",
  GALLERY: "gallery",
  CONTACT_US: "contactus",
  TESTIMONIALS: "testimonials",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const hashForSection = (sectionId: SectionId): string => `#${sectionId}`;

export const SECTION_IDS = {
  HOME: "home",
  ABOUT_US: "aboutus",
  WHY_CHOOSE_US: "whychooseus",
  SERVICES: "services",
  PACKAGES: "packages",
  HOW_IT_WORKS: "howitworks",
  TRAVEL_INSIGHTS: "travelinsights",
  GALLERY: "gallery",
  CONTACT_US: "contactus",
  TESTIMONIALS: "testimonials",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const hashForSection = (sectionId: SectionId): string => `#${sectionId}`;

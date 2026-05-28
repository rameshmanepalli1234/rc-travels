import { SECTION_IDS, type SectionId } from "./sectionIds";

export type TutorialPlacement = "top" | "bottom" | "left" | "right" | "center";

export type TutorialStep = {
  id: string;
  title: string;
  description: string;
  /** CSS selector for spotlight target, e.g. [data-tour="navbar"] */
  target?: string;
  /** Scroll to this section before highlighting */
  sectionId?: SectionId;
  placement?: TutorialPlacement;
};

export const TUTORIAL_STORAGE_KEY = "rc-travels-tutorial-completed";

export const tutorialSteps: TutorialStep[] = [
  {
    id: "welcome",
    title: "Welcome to Ramesh Tours & Travels",
    description:
      "This short guide walks you through the main features — navigation, booking a tour, AI travel help, and sending us a message.",
    sectionId: SECTION_IDS.HOME,
    placement: "center",
  },
  {
    id: "navigation",
    title: "Explore the site",
    description:
      "Use the menu to jump to Packages, Travel Insights, Services, Contact, Testimonials, and Gallery. On mobile, tap the menu icon.",
    target: '[data-tour="navbar"]',
    sectionId: SECTION_IDS.HOME,
    placement: "bottom",
  },
  {
    id: "packages",
    title: "Tour packages",
    description:
      "Browse handpicked tours with prices, duration, and highlights. Each card shows destination details and what is included.",
    target: '[data-tour="packages"]',
    sectionId: SECTION_IDS.PACKAGES,
    placement: "top",
  },
  {
    id: "book-now",
    title: "Book Now",
    description:
      "Tap Book Now on any package to open the booking form. Enter your email, mobile number, and preferred travel date — we will confirm by email.",
    target: '[data-tour="book-now"]',
    sectionId: SECTION_IDS.PACKAGES,
    placement: "top",
  },
  {
    id: "copilot",
    title: "Travel Assistant (Copilot)",
    description:
      "Open the green chat button for AI-powered help. Ask about packages, destinations, or trip ideas — powered by Google Gemini.",
    target: '[data-tour="travel-assistant"]',
    sectionId: SECTION_IDS.PACKAGES,
    placement: "left",
  },
  {
    id: "how-it-works",
    title: "How it works",
    description:
      "See the three simple steps: explore packages, book in minutes, and travel with our team handling the details.",
    target: '[data-tour="how-it-works"]',
    sectionId: SECTION_IDS.HOW_IT_WORKS,
    placement: "top",
  },
  {
    id: "send-email",
    title: "Send us a message",
    description:
      "Fill in the contact form to enquire about custom trips, group travel, or general questions. We reply to your email shortly.",
    target: '[data-tour="contact-form"]',
    sectionId: SECTION_IDS.CONTACT_US,
    placement: "top",
  },
  {
    id: "finish",
    title: "You are all set!",
    description:
      "You can restart this guide anytime from the Take a tour button in the header. Happy travels with Ramesh Tours & Travels!",
    sectionId: SECTION_IDS.HOME,
    placement: "center",
  },
];

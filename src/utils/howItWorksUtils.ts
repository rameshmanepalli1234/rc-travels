import type { IconType } from "react-icons";
import { FaMapLocationDot, FaPaperPlane, FaVanShuttle } from "react-icons/fa6";

export type HowItWorksStep = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Explore packages",
    description:
      "Browse curated tour packages or tell us your dream itinerary. Compare destinations, duration, and pricing at a glance.",
    Icon: FaMapLocationDot,
  },
  {
    id: 2,
    title: "Book in minutes",
    description:
      "Pick your preferred travel date, share contact details, and confirm. We respond quickly to finalize your trip plan.",
    Icon: FaPaperPlane,
  },
  {
    id: 3,
    title: "Travel with confidence",
    description:
      "Enjoy punctual pickups, a friendly driver, and support throughout the journey. Focus on the experience — we handle the rest.",
    Icon: FaVanShuttle,
  },
];

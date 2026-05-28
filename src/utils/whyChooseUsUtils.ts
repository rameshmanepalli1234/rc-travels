import type { IconType } from "react-icons";
import {
  FaCalendarCheck,
  FaHandshake,
  FaShieldHalved,
  FaWallet,
} from "react-icons/fa6";

export type WhyChooseStat = {
  id: string;
  value: string;
  label: string;
};

export type WhyChooseHighlight = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

export const whyChooseStats: WhyChooseStat[] = [
  { id: "trips", value: "2,500+", label: "Trips completed" },
  { id: "years", value: "2+", label: "Years of service" },
  { id: "routes", value: "50+", label: "Routes & destinations" },
  { id: "rating", value: "4.9★", label: "Customer satisfaction" },
];

export const whyChooseHighlights: WhyChooseHighlight[] = [
  {
    id: 1,
    title: "Trusted local expertise",
    description:
      "Based in Rajamahendravaram with deep knowledge of Andhra Pradesh routes, temples, and hidden gems.",
    Icon: FaHandshake,
  },
  {
    id: 2,
    title: "Safe & comfortable fleet",
    description:
      "Well-maintained AC vehicles, experienced drivers, and safety-first practices on every journey.",
    Icon: FaShieldHalved,
  },
  {
    id: 3,
    title: "Transparent pricing",
    description:
      "Clear package costs with no surprise charges. Custom itineraries quoted upfront before you confirm.",
    Icon: FaWallet,
  },
  {
    id: 4,
    title: "Flexible planning",
    description:
      "Family trips, group tours, or corporate travel — we adapt dates, stops, and pace to your needs.",
    Icon: FaCalendarCheck,
  },
];

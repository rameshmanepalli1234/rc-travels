import { IoSearch } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { BiSolidShower } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export const travelServiceList = [
  {
    title: "Trip Consultation",
    description:
      "Discuss your travel preferences and destinations with our expert team to plan the perfect journey.",
    Icon: IoSearch,
    id: 1,
  },
  {
    title: "Booking & Preparation",
    description:
      "Confirm your travel dates, vehicle, and itinerary, ensuring everything is ready for a smooth trip.",
    Icon: FaTools,
    id: 2,
  },
  {
    title: "Guided Travel",
    description:
      "Enjoy a comfortable journey with our experienced drivers, exploring destinations safely and efficiently.",
    Icon: BiSolidShower,
    id: 3,
  },
  {
    title: "Trip Review",
    description:
      "We follow up after your journey to gather feedback and ensure your travel experience was memorable.",
    Icon: FaCheckCircle,
    id: 4,
  },
];

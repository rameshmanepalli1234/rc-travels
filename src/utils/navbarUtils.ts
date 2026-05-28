import { FaBoxesPacking } from "react-icons/fa6";
// import { PiEngineFill } from 'react-icons/pi';
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaHome, FaImages, FaTools, FaUser } from "react-icons/fa";
// import { FaCar } from 'react-icons/fa';
import { IntlShape } from "react-intl";
import type { IconType } from "react-icons";
import messages from "@messages";
import {
  SECTION_IDS,
  hashForSection,
  type SectionId,
} from "@/constants/sectionIds";

export type NavItem = {
  name: string;
  href: string;
  sectionId: SectionId;
  Icon: IconType;
};

export const navbarUtils = (intl: IntlShape): NavItem[] => [
  {
    name: intl.formatMessage(messages.HOME),
    href: hashForSection(SECTION_IDS.HOME),
    sectionId: SECTION_IDS.HOME,
    Icon: FaHome,
  },
  {
    name: intl.formatMessage(messages.ABOUT_US),
    href: hashForSection(SECTION_IDS.ABOUT_US),
    sectionId: SECTION_IDS.ABOUT_US,
    Icon: FaUser,
  },
  // {
  //   name: intl.formatMessage(messages.DRIVING_SCHOOL),
  //   href: '/driving-school',
  //   Icon: FaCar,
  // },
  // {
  //   name: intl.formatMessage(messages.CARBON_CLEANING),
  //   href: '/carbon-cleaning',
  //   Icon: PiEngineFill,
  // },
  {
    name: intl.formatMessage(messages.SERVICES),
    href: hashForSection(SECTION_IDS.SERVICES),
    sectionId: SECTION_IDS.SERVICES,
    Icon: FaTools,
  },
  {
    name: intl.formatMessage(messages.PACKAGES),
    href: hashForSection(SECTION_IDS.PACKAGES),
    sectionId: SECTION_IDS.PACKAGES,
    Icon: FaBoxesPacking,
  },
  {
    name: intl.formatMessage(messages.GALLERY),
    href: hashForSection(SECTION_IDS.GALLERY),
    sectionId: SECTION_IDS.GALLERY,
    Icon: FaImages,
  },
  {
    name: intl.formatMessage(messages.TESTIMONIALS),
    href: hashForSection(SECTION_IDS.TESTIMONIALS),
    sectionId: SECTION_IDS.TESTIMONIALS,
    Icon: FaUser,
  },
  {
    name: intl.formatMessage(messages.CONTACT_US),
    href: hashForSection(SECTION_IDS.CONTACT_US),
    sectionId: SECTION_IDS.CONTACT_US,
    Icon: RiCustomerServiceFill,
  },
];

import { FaBoxesPacking } from "react-icons/fa6";
// import { PiEngineFill } from 'react-icons/pi';
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaHome, FaImages, FaTools, FaUser } from "react-icons/fa";
// import { FaCar } from 'react-icons/fa';
import { IntlShape } from "react-intl";
import messages from "@messages";

export const navbarUtils = (intl: IntlShape) => [
  {
    name: intl.formatMessage(messages.HOME),
    href: "/",
    Icon: FaHome,
  },
  {
    name: intl.formatMessage(messages.ABOUT_US),
    href: "/about",
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
    href: "/services",
    Icon: FaTools,
  },
  {
    name: intl.formatMessage(messages.PACKAGES),
    href: "/packages",
    Icon: FaBoxesPacking,
  },
  {
    name: intl.formatMessage(messages.GALLERY),
    href: "/gallery",
    Icon: FaImages,
  },
  {
    name: intl.formatMessage(messages.CONTACT_US),
    href: "/contact-us",
    Icon: RiCustomerServiceFill,
  },
];

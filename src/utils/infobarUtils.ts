import { IntlShape } from "react-intl";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaClock, FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import messages from "@messages";

export const infobarUtils = (intl: IntlShape) => [
  {
    name: intl.formatMessage(messages.PHONE_NUMBER),
    Icon: FaPhone,
  },
  {
    name: intl.formatMessage(messages.EMAIL),
    Icon: FaEnvelope,
  },
  {
    name: intl.formatMessage(messages.OPENING_HOURS),
    Icon: FaClock,
  },
];

export const infoIconUtils = [
  {
    name: "Facebook",
    Icon: FaFacebook,
    href: "#",
  },
  {
    name: "Twitter",
    Icon: FaTwitter,
    href: "#",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Youtube",
    Icon: IoLogoYoutube,
    href: "#",
  },
];

import { IntlShape } from "react-intl";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import messages from "@messages";

const PHONE_TEL = "tel:+916300133869";
const EMAIL_MAILTO = "mailto:rctravels@gmail.com";

export const SOCIAL_LINKS = {
  FACEBOOK:
    "https://www.facebook.com/ramesh.manepalli.560?mibextid=wwXIfr&mibextid=wwXIfr",
  INSTAGRAM:
    "https://www.instagram.com/__.rammy_?igsh=NmttcXQwMjlvc2Rx&utm_source=qr",
  YOUTUBE: "https://youtube.com/@rameshmanepalli0?si=TSA9k5PqGsQnbO8l",
  /** Profile URL without platform-specific utm params — opens on mobile and desktop */
  LINKEDIN: "https://www.linkedin.com/in/ramesh-manepalli-180901289/",
} as const;

export const infobarUtils = (intl: IntlShape) => [
  {
    name: intl.formatMessage(messages.PHONE_NUMBER),
    Icon: FaPhone,
    href: PHONE_TEL,
  },
  {
    name: intl.formatMessage(messages.EMAIL),
    Icon: FaEnvelope,
    href: EMAIL_MAILTO,
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
    href: SOCIAL_LINKS.FACEBOOK,
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: SOCIAL_LINKS.INSTAGRAM,
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    href: SOCIAL_LINKS.LINKEDIN,
  },
  {
    name: "Youtube",
    Icon: IoLogoYoutube,
    href: SOCIAL_LINKS.YOUTUBE,
  },
];

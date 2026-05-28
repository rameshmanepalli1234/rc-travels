import {
  infoIconUtils,
  BRAND_NAME,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_MAILTO,
  CONTACT_ADDRESS,
  CONTACT_HOURS,
} from "@utils";
import { StyledFooter } from "./style";
import { InfoBarItem } from "@containers/InfoBar/types";
import { navbarUtils } from "@utils";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { footerUtils } from "@utils";
import { navigateToSection } from "@/utils/scrollUtils";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import { IntlShape } from "react-intl";

const Footer = () => {
  const mockIntl = {
    formatMessage: (message: { defaultMessage: string }) =>
      message.defaultMessage,
  } as IntlShape;

  const navItems = navbarUtils(mockIntl);

  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div className="footer-top-title">{BRAND_NAME}</div>
            <div className="footer-top-title-description">
              Professional travel services designed for comfort and convenience.
              Experienced drivers and clean vehicles you can trust. Making every
              journey stress-free and memorable.
            </div>
            <div className="footer-top-title-icons">
              {infoIconUtils.map((item: InfoBarItem, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className="footer-top-title-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-top-section-links-quick-links">
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Quick </span>
              Links
            </div>
            <ul className="footer-top-section-links-list">
              {navItems.map((item, index) => (
                <li key={index} className="footer-top-section-links-list-item">
                  <MdOutlineKeyboardArrowRight className="footer-top-section-links-list-icon" />
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToSection(item.sectionId);
                    }}
                    className="footer-top-section-links-list-item-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-top-section-links">
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Our S</span>
              ervices
            </div>
            <ul className="footer-top-section-links-list">
              {footerUtils.map((item, index) => (
                <li key={index} className="footer-top-section-links-list-item">
                  <MdOutlineKeyboardArrowRight className="footer-top-section-links-list-icon" />
                  <div> {item.name} </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Our S</span>
              ervices
            </div>
            <div>
              <a href="#" data-testid="link-service-carbon-cleaning">
                Driving School
              </a>
              <a href="#" data-testid="link-service-carbon-cleaning">
                Carbon Cleaning
              </a>
              <a href="#" data-testid="link-service-carbon-cleaning">
                Cars Rented/Sale
              </a>
            </div>
          </div> */}
          <div>
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Conta</span>ct
              Info
            </div>
            <div className="footer-top-section-contact-info-address">
              <FaLocationDot className="footer-top-section-contact-info-address-icon" />
              {CONTACT_ADDRESS}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="footer-top-section-contact-info-address">
                <FaPhone className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Call Us:
                  <a
                    href={CONTACT_PHONE_TEL}
                    className="footer-top-section-contact-info-phone-number"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="footer-top-section-contact-info-address">
                <FaEnvelope className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Email Us:
                  <a
                    href={CONTACT_EMAIL_MAILTO}
                    className="footer-top-section-contact-info-phone-number"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="footer-top-section-contact-info-address">
                <FaClock className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Working Hours:
                  <div className="footer-top-section-contact-info-phone-number">
                    {CONTACT_HOURS}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-copyright-info">
            © 2025 {BRAND_NAME} All rights reserved.
          </div>
          <div className="footer-bottom-copyright-text">
            Design and Developed by{" "}
            <span className="footer-copyright-link">{BRAND_NAME}</span>{" "}
            Pvt Ltd.
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

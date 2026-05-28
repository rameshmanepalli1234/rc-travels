import React, { useState } from "react";
import {
  StyledNavBar,
  StyledNavLinks,
  StyledDrawer,
  StyledDrawerOverlay,
  StyledHamburger,
  StyledDrawerContent,
  StyledDrawerHeader,
  StyledDrawerClose,
  StyledDrawerNav,
} from "./style";
import { navbarUtils } from "@/utils";
import { navigateToSection } from "@/utils/scrollUtils";
import type { SectionId } from "@/constants/sectionIds";
import { FaBars, FaTimes } from "react-icons/fa";
import { IntlShape } from "react-intl";
import TutorialTrigger from "@components/TutorialTrigger";

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Mock intl object for now since we don't have react-intl setup
  const mockIntl = {
    formatMessage: (message: { defaultMessage: string }) =>
      message.defaultMessage,
  } as IntlShape;

  const navItems = navbarUtils(mockIntl);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => {
    event.preventDefault();
    navigateToSection(sectionId);
    closeDrawer();
  };

  return (
    <>
      <StyledNavBar data-testid="section-navbar" data-tour="navbar">
        <h3 data-testid="text-navbar-brand">Ramesh Tours & Travels</h3>

        {/* Desktop Navigation */}
        <StyledNavLinks>
          <TutorialTrigger />
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.sectionId)}
              data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.name}
            </a>
          ))}
        </StyledNavLinks>

        {/* Mobile Hamburger Menu */}
        <StyledHamburger
          onClick={toggleDrawer}
          data-testid="button-navbar-menu"
        >
          <FaBars />
        </StyledHamburger>
      </StyledNavBar>

      {/* Mobile/Tablet Drawer */}
      {isDrawerOpen && (
        <StyledDrawerOverlay
          onClick={closeDrawer}
          data-testid="overlay-navbar-drawer"
        />
      )}
      <StyledDrawer isOpen={isDrawerOpen}>
        <StyledDrawerContent>
          <StyledDrawerHeader>
            <h3 data-testid="text-drawer-brand">Ramesh Tours & Travels</h3>
            <StyledDrawerClose
              onClick={closeDrawer}
              data-testid="button-drawer-close"
            >
              <FaTimes />
            </StyledDrawerClose>
          </StyledDrawerHeader>

          <StyledDrawerNav>
            <TutorialTrigger variant="mobile" />
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.sectionId)}
                data-testid={`link-drawer-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </a>
            ))}
          </StyledDrawerNav>
        </StyledDrawerContent>
      </StyledDrawer>
    </>
  );
};

export default NavBar;

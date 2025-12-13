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
import { FaBars, FaTimes } from "react-icons/fa";
import { IntlShape } from "react-intl";

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

  return (
    <>
      <StyledNavBar>
        <h3 data-testid="text-navbar-brand">Aditya Car Zone</h3>

        {/* Desktop Navigation */}
        <StyledNavLinks>
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
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
            <h3 data-testid="text-drawer-brand">Aditya Car Zone</h3>
            <StyledDrawerClose
              onClick={closeDrawer}
              data-testid="button-drawer-close"
            >
              <FaTimes />
            </StyledDrawerClose>
          </StyledDrawerHeader>

          <StyledDrawerNav>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={closeDrawer}
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

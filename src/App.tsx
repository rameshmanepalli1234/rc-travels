import React from "react";
const { IntlProvider } = require("react-intl");
import AccessControl from "@components/AccessControl";
import NavBar from "@containers/NavBar";
import InfoBar from "@containers/InfoBar";
import MenuBar from "@containers/MenuBar";
import Home from "@pages/Home";
import Footer from "@containers/Footer";
import Testimonials from "@containers/Testimonials";
import { StyledMainContainer } from "./style";
import Services from "@/pages/Services";
import Gallery from "@pages/Gallery";
import AboutUs from "@pages/AboutUs";
import Packages from "@pages/Packages";
import ContactUs from "@pages/ContactUs";

const App: React.FC = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <AccessControl>
        <StyledMainContainer>
          <InfoBar />
          <MenuBar />
          <NavBar />
          <Services />
          <Home />
          <Testimonials />
          <Gallery />
          <AboutUs />
          <Packages />
          <ContactUs />
          <Footer />
        </StyledMainContainer>
      </AccessControl>
    </IntlProvider>
  );
};

export default App;

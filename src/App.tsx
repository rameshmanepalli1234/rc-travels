import React from "react";
const { IntlProvider } = require("react-intl");
import AccessControl from "@components/AccessControl";
import SectionAnchor from "@components/SectionAnchor";
import NavBar from "@containers/NavBar";
import InfoBar from "@containers/InfoBar";
import MenuBar from "@containers/MenuBar";
import Home from "@pages/Home";
import Footer from "@containers/Footer";
import Testimonials from "@/pages/Testimonials";
import { StyledMainContainer } from "./style";
import Services from "@/pages/Services";
import Gallery from "@pages/Gallery";
import AboutUs from "@pages/AboutUs";
import Packages from "@pages/Packages";
import TravelInsights from "@pages/TravelInsights";
import ContactUs from "@pages/ContactUs";
import WhyChooseUs from "@pages/WhyChooseUs";
import HowItWorks from "@pages/HowItWorks";
import TripCtaBanner from "@components/TripCtaBanner";
import ScrollToTop from "@components/ScrollToTop";
import TravelAssistant from "@components/TravelAssistant";
import { ToastProvider } from "@/context/ToastContext";
import { BookingProvider } from "@/context/BookingContext";
import { TutorialProvider } from "@/context/TutorialContext";
import AppTutorial from "@components/AppTutorial";
import TutorialAutoStart from "@components/AppTutorial/TutorialAutoStart";
import { SECTION_IDS } from "@/constants/sectionIds";
import { useHashScroll } from "@/hooks/useHashScroll";

const App: React.FC = () => {
  useHashScroll();

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <AccessControl>
        <ToastProvider>
        <TutorialProvider>
        <BookingProvider>
        <StyledMainContainer>
              <InfoBar />
              <MenuBar />
              <NavBar />
              <SectionAnchor id={SECTION_IDS.HOME}>
                <Home />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.ABOUT_US}>
                <AboutUs />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.WHY_CHOOSE_US}>
                <WhyChooseUs />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.PACKAGES}>
                <Packages />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.HOW_IT_WORKS}>
                <HowItWorks />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.TRAVEL_INSIGHTS}>
                <TravelInsights />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.SERVICES}>
                <Services />
              </SectionAnchor>
              <TripCtaBanner />
              <SectionAnchor id={SECTION_IDS.CONTACT_US}>
                <ContactUs />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.TESTIMONIALS}>
                <Testimonials />
              </SectionAnchor>
              <SectionAnchor id={SECTION_IDS.GALLERY}>
                <Gallery />
              </SectionAnchor>
              <Footer />
              <ScrollToTop />
              <TravelAssistant />
              <AppTutorial />
              <TutorialAutoStart />
            </StyledMainContainer>
        </BookingProvider>
        </TutorialProvider>
        </ToastProvider>
      </AccessControl>
    </IntlProvider>
  );
};

export default App;

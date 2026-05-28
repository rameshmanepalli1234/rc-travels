import { SECTION_IDS } from "@/constants/sectionIds";
import {
  navigateToPackagesTable,
  navigateToSection,
} from "@/utils/scrollUtils";
import { StyledTripCtaBanner } from "./style";

const TripCtaBanner = () => {
  return (
    <StyledTripCtaBanner data-testid="section-trip-cta">
      <div className="cta-content">
        <span className="cta-eyebrow">Ready to travel?</span>
        <h2 className="cta-title">Start planning your next journey today</h2>
        <p className="cta-text">
          Browse our tour packages or reach out for a custom itinerary. Our team
          in Rajamahendravaram is ready to help you travel comfortably.
        </p>
      </div>
      <div className="cta-actions">
        <button
          type="button"
          className="cta-btn cta-btn-light"
          onClick={() => navigateToPackagesTable()}
          data-testid="button-cta-packages"
        >
          Explore packages
        </button>
        <button
          type="button"
          className="cta-btn cta-btn-outline"
          onClick={() => navigateToSection(SECTION_IDS.CONTACT_US)}
          data-testid="button-cta-contact"
        >
          Get in touch
        </button>
      </div>
    </StyledTripCtaBanner>
  );
};

export default TripCtaBanner;

import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import {
  packagesUtils,
  formatPackagePrice,
  type TravelPackage,
} from "@utils";
import { hashForSection, SECTION_IDS } from "@/constants/sectionIds";
import { StyledPackages, StyledPackageCard } from "./style";

const Packages = () => {
  const contactHref = hashForSection(SECTION_IDS.CONTACT_US);

  return (
    <StyledPackages>
      <header className="packages-header">
        <span className="packages-eyebrow">Tour Packages</span>
        <h2 className="packages-title">Explore Our Travel Packages</h2>
        <p className="packages-subtitle">
          Handpicked tours across Andhra Pradesh and beyond — transparent pricing,
          comfortable stays, and memorable experiences with RC Tours &amp; Travels.
        </p>
      </header>

      <div className="packages-grid">
        {packagesUtils.map((pkg: TravelPackage) => (
          <StyledPackageCard key={pkg.id}>
            <div className="package-card-image-wrap">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="package-card-image"
              />
              {pkg.badge && (
                <span className="package-card-badge">{pkg.badge}</span>
              )}
            </div>

            <div className="package-card-body">
              <span className="package-card-location">
                <FaMapMarkerAlt aria-hidden /> {pkg.location}
              </span>
              <h3 className="package-card-title">{pkg.title}</h3>
              <span className="package-card-duration">
                <FaClock aria-hidden /> {pkg.duration}
              </span>

              <div className="package-card-price-row">
                <span className="package-card-price">
                  {formatPackagePrice(pkg.price)}
                </span>
                <span className="package-card-price-note">per person</span>
              </div>

              <ul className="package-card-highlights">
                {pkg.highlights.map((highlight: string) => (
                  <li key={highlight} className="package-card-highlight">
                    {highlight}
                  </li>
                ))}
              </ul>

              <a href={contactHref} className="package-card-cta">
                Book Now
              </a>
            </div>
          </StyledPackageCard>
        ))}
      </div>
    </StyledPackages>
  );
};

export default Packages;

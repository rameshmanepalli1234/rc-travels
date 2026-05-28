import { useState } from "react";
import {
  packagesTableUtils,
  formatPackagePrice,
  type TableTravelPackage,
} from "@utils";
import { hashForSection, SECTION_IDS } from "@/constants/sectionIds";
import { navigateToPackagesTable } from "@/utils/scrollUtils";
import { StyledPackagesTable } from "./style";

const INITIAL_VISIBLE_ROWS = 8;
const ROWS_INCREMENT = 8;

const PackagesTable = () => {
  const contactHref = hashForSection(SECTION_IDS.CONTACT_US);
  const totalRows = packagesTableUtils.length;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ROWS);

  const visiblePackages = packagesTableUtils.slice(0, visibleCount);
  const canShowMore = visibleCount < totalRows;
  const canShowLess = visibleCount > INITIAL_VISIBLE_ROWS;

  const handleShowMore = (): void => {
    setVisibleCount((prev) =>
      Math.min(prev + ROWS_INCREMENT, totalRows),
    );
  };

  const handleShowLess = (): void => {
    setVisibleCount(INITIAL_VISIBLE_ROWS);
    requestAnimationFrame(() => {
      navigateToPackagesTable();
    });
  };

  const renderRow = (pkg: TableTravelPackage) => (
    <tr key={pkg.id}>
      <td data-label="Tour">
        <div className="packages-table-tour-cell">
          <img src={pkg.image} alt="" className="packages-table-thumb" />
          <div>
            <p className="packages-table-tour-name">{pkg.title}</p>
            {pkg.badge && (
              <span className="packages-table-badge">{pkg.badge}</span>
            )}
          </div>
        </div>
      </td>
      <td data-label="Location" className="packages-table-location">
        {pkg.location}
      </td>
      <td data-label="Duration" className="packages-table-duration">
        {pkg.duration}
      </td>
      <td data-label="Price">
        <span className="packages-table-price">
          {formatPackagePrice(pkg.price)}
        </span>
        <span className="packages-table-price-note">per person</span>
      </td>
      <td data-label="Inclusions" className="packages-table-inclusions">
        {pkg.highlights.join(" • ")}
      </td>
      <td data-label="Availability">
        <span
          className={`packages-table-availability ${pkg.available ? "is-available" : "is-unavailable"}`}
        >
          {pkg.available ? "Available" : "Not Available"}
        </span>
      </td>
      <td data-label="Book Now">
        {pkg.available ? (
          <a href={contactHref} className="packages-table-book-btn">
            Book Now
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="packages-table-book-btn packages-table-book-btn-disabled"
          >
            Book Now
          </button>
        )}
      </td>
    </tr>
  );

  return (
    <StyledPackagesTable id="packages-table">
      <header className="packages-table-header">
        <span className="packages-table-eyebrow">Quick Compare</span>
        <h3 className="packages-table-title">Tour Packages at a Glance</h3>
        <p className="packages-table-subtitle">
          Browse {totalRows} destinations across India — compare pricing and
          inclusions, then book your preferred tour in one click.
        </p>
      </header>

      <div className="packages-table-scroll">
        <table className="packages-table">
          <thead>
            <tr>
              <th scope="col">Tour</th>
              <th scope="col">Location</th>
              <th scope="col">Duration</th>
              <th scope="col">Price</th>
              <th scope="col">Inclusions</th>
              <th scope="col">Availability</th>
              <th scope="col">Book Now</th>
            </tr>
          </thead>
          <tbody>{visiblePackages.map(renderRow)}</tbody>
        </table>
      </div>

      {(canShowMore || canShowLess) && (
        <div className="packages-table-pagination">
          <span className="packages-table-pagination-info">
            Showing {visibleCount} of {totalRows} tours
          </span>
          <div className="packages-table-pagination-actions">
            {canShowLess && (
              <button
                type="button"
                className="packages-table-toggle-btn packages-table-toggle-less"
                onClick={handleShowLess}
              >
                Show Less
              </button>
            )}
            {canShowMore && (
              <button
                type="button"
                className="packages-table-toggle-btn packages-table-toggle-more"
                onClick={handleShowMore}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      )}
    </StyledPackagesTable>
  );
};

export default PackagesTable;

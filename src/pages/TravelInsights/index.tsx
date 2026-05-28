import PackageInsightsChart from "@components/PackageInsightsChart";
import { StyledTravelInsights } from "./style";

const TravelInsights = () => (
  <StyledTravelInsights>
    <header className="travel-insights-header">
      <span className="travel-insights-eyebrow">Travel Insights</span>
      <h2 className="travel-insights-title">Tour Portfolio at a Glance</h2>
      <p className="travel-insights-subtitle">
        Explore how our curated packages are spread across travel styles and
        regions — built from your live tour catalogue.
      </p>
    </header>

    <div className="travel-insights-content">
      <PackageInsightsChart showHeader={false} />
    </div>
  </StyledTravelInsights>
);

export default TravelInsights;

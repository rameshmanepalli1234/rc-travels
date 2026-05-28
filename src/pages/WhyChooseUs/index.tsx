import { whyChooseHighlights, whyChooseStats } from "@utils";
import { StyledWhyChooseUs } from "./style";

const WhyChooseUs = () => {
  return (
    <StyledWhyChooseUs data-testid="section-why-choose">
      <header className="why-header">
        <span className="why-eyebrow">Why travel with us</span>
        <h2 className="why-title">Why Choose Ramesh Tours &amp; Travels</h2>
        <p className="why-subtitle">
          Reliable service, honest pricing, and journeys planned around your
          comfort — from Rajamahendravaram to destinations across India.
        </p>
      </header>

      <div className="why-stats">
        {whyChooseStats.map((stat) => (
          <div
            key={stat.id}
            className="why-stat-card"
            data-testid={`card-why-stat-${stat.id}`}
          >
            <span className="why-stat-value">{stat.value}</span>
            <span className="why-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="why-grid">
        {whyChooseHighlights.map((item) => (
          <article
            key={item.id}
            className="why-card"
            data-testid={`card-why-highlight-${item.id}`}
          >
            <div className="why-card-icon" aria-hidden>
              <item.Icon />
            </div>
            <div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </StyledWhyChooseUs>
  );
};

export default WhyChooseUs;

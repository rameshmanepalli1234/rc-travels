import { howItWorksSteps } from "@utils";
import { SECTION_IDS } from "@/constants/sectionIds";
import {
  navigateToPackagesTable,
  navigateToSection,
} from "@/utils/scrollUtils";
import { StyledHowItWorks } from "./style";

const HowItWorks = () => {
  return (
    <StyledHowItWorks data-testid="section-how-works">
      <div className="how-inner">
        <header className="how-header">
          <span className="how-eyebrow">Simple process</span>
          <h2 className="how-title">How It Works</h2>
          <p className="how-subtitle">
            Plan your trip in three easy steps — from choosing a package to
            hitting the road with a team you can trust.
          </p>
        </header>

        <div className="how-steps">
          <div className="how-connector" aria-hidden />
          {howItWorksSteps.map((step) => (
            <article
              key={step.id}
              className="how-step"
              data-testid={`card-how-step-${step.id}`}
            >
              <span className="how-step-number">STEP {step.id}</span>
              <div className="how-step-icon-wrap" aria-hidden>
                <step.Icon />
              </div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-text">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-actions">
          <button
            type="button"
            className="how-btn how-btn-primary"
            onClick={() => navigateToPackagesTable()}
            data-testid="button-how-packages"
          >
            View tour packages
          </button>
          <button
            type="button"
            className="how-btn how-btn-secondary"
            onClick={() => navigateToSection(SECTION_IDS.CONTACT_US)}
            data-testid="button-how-contact"
          >
            Contact our team
          </button>
        </div>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useTutorial } from "@/context/TutorialContext";
import { scrollToSection } from "@/utils/scrollUtils";
import type { TutorialPlacement } from "@/constants/tutorialSteps";
import {
  StyledTutorialBackdrop,
  StyledTutorialCard,
  StyledTutorialRoot,
  StyledTutorialSpotlight,
} from "./style";

const CARD_WIDTH = 360;
const CARD_HEIGHT_ESTIMATE = 220;
const SPOTLIGHT_PAD = 8;
const SCROLL_SETTLE_MS = 450;

type SpotlightRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type CardPosition = {
  top: number;
  left: number;
};

const getSpotlightRect = (selector?: string): SpotlightRect | null => {
  if (!selector) {
    return null;
  }

  const el = document.querySelector(selector);
  if (!el) {
    return null;
  }

  const rect = el.getBoundingClientRect();
  return {
    top: Math.max(8, rect.top - SPOTLIGHT_PAD),
    left: Math.max(8, rect.left - SPOTLIGHT_PAD),
    width: rect.width + SPOTLIGHT_PAD * 2,
    height: rect.height + SPOTLIGHT_PAD * 2,
  };
};

const getCardPosition = (
  placement: TutorialPlacement,
  spotlight: SpotlightRect | null,
): CardPosition => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cardW = Math.min(CARD_WIDTH, vw - 32);

  if (placement === "center" || !spotlight) {
    return {
      top: Math.max(24, (vh - CARD_HEIGHT_ESTIMATE) / 2),
      left: Math.max(16, (vw - cardW) / 2),
    };
  }

  let top = spotlight.top + spotlight.height + 16;
  let left = spotlight.left;

  if (placement === "top") {
    top = spotlight.top - CARD_HEIGHT_ESTIMATE - 16;
  }

  if (placement === "left") {
    top = spotlight.top;
    left = spotlight.left - cardW - 16;
  }

  if (placement === "right") {
    top = spotlight.top;
    left = spotlight.left + spotlight.width + 16;
  }

  if (placement === "bottom") {
    top = spotlight.top + spotlight.height + 16;
  }

  top = Math.max(16, Math.min(top, vh - CARD_HEIGHT_ESTIMATE - 16));
  left = Math.max(16, Math.min(left, vw - cardW - 16));

  return { top, left };
};

const AppTutorial = () => {
  const {
    isActive,
    step,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    endTutorial,
    goToStep,
  } = useTutorial();

  const [spotlight, setSpotlight] = useState<SpotlightRect | null>(null);
  const [cardPos, setCardPos] = useState<CardPosition>({ top: 0, left: 0 });

  const updateLayout = useCallback((): void => {
    const rect = getSpotlightRect(step.target);
    const placement = step.placement ?? (rect ? "bottom" : "center");
    setSpotlight(rect);
    setCardPos(getCardPosition(placement, rect));
  }, [step]);

  useLayoutEffect(() => {
    if (!isActive) {
      return;
    }

    if (step.sectionId) {
      scrollToSection(step.sectionId);
    }

    const scrollTimer = window.setTimeout(updateLayout, SCROLL_SETTLE_MS);
    updateLayout();

    return () => window.clearTimeout(scrollTimer);
  }, [isActive, step, currentStep, updateLayout]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const onResize = (): void => updateLayout();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [isActive, updateLayout]);

  if (!isActive) {
    return null;
  }

  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;
  const placement = step.placement ?? (spotlight ? "bottom" : "center");

  return (
    <StyledTutorialRoot
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutorial-step-title"
      data-testid="overlay-app-tutorial"
    >
      <StyledTutorialBackdrop
        onClick={() => endTutorial(false)}
        aria-hidden
      />

      {spotlight && (
        <StyledTutorialSpotlight
          style={{
            top: spotlight.top,
            left: spotlight.left,
            width: spotlight.width,
            height: spotlight.height,
          }}
          data-testid="section-tutorial-spotlight"
        />
      )}

      <StyledTutorialCard
        $top={cardPos.top}
        $left={cardPos.left}
        $placement={placement}
        data-testid="section-tutorial-card"
      >
        <span className="tutorial-step-badge">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <h2 id="tutorial-step-title" className="tutorial-title">
          {step.title}
        </h2>
        <p className="tutorial-description">{step.description}</p>

        <div className="tutorial-progress" aria-hidden>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              type="button"
              className="tutorial-dot"
              data-active={index === currentStep}
              onClick={() => goToStep(index)}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <div className="tutorial-actions">
          <button
            type="button"
            className="tutorial-btn tutorial-btn-skip"
            onClick={() => endTutorial(true)}
            data-testid="button-tutorial-skip"
          >
            Skip tour
          </button>
          <div className="tutorial-actions-left">
            <button
              type="button"
              className="tutorial-btn tutorial-btn-ghost"
              onClick={prevStep}
              disabled={isFirst}
              data-testid="button-tutorial-back"
            >
              Back
            </button>
            <button
              type="button"
              className="tutorial-btn tutorial-btn-primary"
              onClick={nextStep}
              data-testid="button-tutorial-next"
            >
              {isLast ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </StyledTutorialCard>
    </StyledTutorialRoot>
  );
};

export default AppTutorial;

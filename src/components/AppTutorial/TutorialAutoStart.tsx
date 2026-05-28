import { useEffect, useRef } from "react";
import { useTutorial } from "@/context/TutorialContext";

const AUTO_START_DELAY_MS = 3000;

/** Offers the guided tour once on first visit */
const TutorialAutoStart = () => {
  const { hasCompletedTutorial, isActive, startTutorial } = useTutorial();
  const startedRef = useRef(false);

  useEffect(() => {
    if (hasCompletedTutorial || isActive || startedRef.current) {
      return;
    }

    const timer = window.setTimeout(() => {
      startedRef.current = true;
      startTutorial();
    }, AUTO_START_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [hasCompletedTutorial, isActive, startTutorial]);

  return null;
};

export default TutorialAutoStart;

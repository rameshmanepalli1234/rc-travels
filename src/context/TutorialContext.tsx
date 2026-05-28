import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  TUTORIAL_STORAGE_KEY,
  tutorialSteps,
  type TutorialStep,
} from "@/constants/tutorialSteps";

type TutorialContextValue = {
  isActive: boolean;
  currentStep: number;
  steps: TutorialStep[];
  step: TutorialStep;
  totalSteps: number;
  startTutorial: () => void;
  endTutorial: (markComplete?: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (index: number) => void;
  hasCompletedTutorial: boolean;
};

const TutorialContext = createContext<TutorialContextValue | null>(null);

const readCompleted = (): boolean => {
  try {
    return localStorage.getItem(TUTORIAL_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

export const TutorialProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasCompletedTutorial, setHasCompletedTutorial] = useState(readCompleted);

  const endTutorial = useCallback((markComplete = true): void => {
    setIsActive(false);
    setCurrentStep(0);
    if (markComplete) {
      try {
        localStorage.setItem(TUTORIAL_STORAGE_KEY, "true");
      } catch {
        /* ignore */
      }
      setHasCompletedTutorial(true);
    }
  }, []);

  const startTutorial = useCallback((): void => {
    setCurrentStep(0);
    setIsActive(true);
  }, []);

  const nextStep = useCallback((): void => {
    setCurrentStep((prev) => {
      if (prev >= tutorialSteps.length - 1) {
        endTutorial(true);
        return prev;
      }
      return prev + 1;
    });
  }, [endTutorial]);

  const prevStep = useCallback((): void => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }, []);

  const goToStep = useCallback((index: number): void => {
    setCurrentStep(Math.max(0, Math.min(index, tutorialSteps.length - 1)));
  }, []);

  const value = useMemo(
    (): TutorialContextValue => ({
      isActive,
      currentStep,
      steps: tutorialSteps,
      step: tutorialSteps[currentStep] ?? tutorialSteps[0],
      totalSteps: tutorialSteps.length,
      startTutorial,
      endTutorial,
      nextStep,
      prevStep,
      goToStep,
      hasCompletedTutorial,
    }),
    [
      isActive,
      currentStep,
      startTutorial,
      endTutorial,
      nextStep,
      prevStep,
      goToStep,
      hasCompletedTutorial,
    ],
  );

  return (
    <TutorialContext.Provider value={value}>{children}</TutorialContext.Provider>
  );
};

export const useTutorial = (): TutorialContextValue => {
  const ctx = useContext(TutorialContext);
  if (!ctx) {
    throw new Error("useTutorial must be used within TutorialProvider");
  }
  return ctx;
};

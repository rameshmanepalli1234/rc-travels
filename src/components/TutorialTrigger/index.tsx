import { FiCompass } from "react-icons/fi";
import { useTutorial } from "@/context/TutorialContext";
import { StyledTutorialTrigger, StyledTutorialTriggerMobile } from "./style";

type TutorialTriggerProps = {
  variant?: "desktop" | "mobile";
};

const TutorialTrigger = ({ variant = "desktop" }: TutorialTriggerProps) => {
  const { startTutorial, isActive } = useTutorial();

  if (isActive) {
    return null;
  }

  const Button =
    variant === "mobile" ? StyledTutorialTriggerMobile : StyledTutorialTrigger;

  return (
    <Button
      type="button"
      onClick={() => {
        startTutorial();
      }}
      aria-label="Take a guided tour of the website"
      data-testid={
        variant === "mobile"
          ? "button-start-tutorial-mobile"
          : "button-start-tutorial"
      }
    >
      <FiCompass aria-hidden />
      <span>Take a tour</span>
    </Button>
  );
};

export default TutorialTrigger;

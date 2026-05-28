import { useId, useState } from "react";
import { FiInfo } from "react-icons/fi";
import {
  StyledInfoTrigger,
  StyledTooltipBubble,
  StyledTooltipWrap,
  type TooltipPlacement,
} from "./style";

export type InfoTooltipProps = {
  content: string;
  placement?: TooltipPlacement;
  /** Accessible label when icon alone */
  ariaLabel?: string;
  variant?: "default" | "light";
};

const InfoTooltip = ({
  content,
  placement = "top",
  ariaLabel = "More information",
  variant = "default",
}: InfoTooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <StyledTooltipWrap
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <StyledInfoTrigger
        type="button"
        $variant={variant}
        aria-label={ariaLabel}
        aria-describedby={visible ? tooltipId : undefined}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        data-testid="button-info-tooltip"
      >
        <FiInfo aria-hidden />
      </StyledInfoTrigger>
      <StyledTooltipBubble
        id={tooltipId}
        role="tooltip"
        $placement={placement}
        $visible={visible}
      >
        {content}
      </StyledTooltipBubble>
    </StyledTooltipWrap>
  );
};

export default InfoTooltip;

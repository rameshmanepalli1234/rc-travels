import { useId, useState, type ReactNode } from "react";
import {
  StyledTooltipBubble,
  StyledTooltipWrap,
  type TooltipPlacement,
} from "./style";

export type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  /** Use for fixed-position children (FAB, scroll button) so layout is not broken */
  displayContents?: boolean;
};

const Tooltip = ({
  content,
  children,
  placement = "top",
  displayContents = false,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <StyledTooltipWrap
      $displayContents={displayContents}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? tooltipId : undefined}>{children}</span>
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

export default Tooltip;

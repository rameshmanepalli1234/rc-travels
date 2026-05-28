import InfoTooltip from "./InfoTooltip";
import { StyledFormLabelRow } from "./style";
import type { TooltipPlacement } from "./style";

type StatLabelWithInfoProps = {
  label: string;
  tooltip: string;
  placement?: TooltipPlacement;
  className?: string;
};

/** Inline stat or caption label with info icon */
const StatLabelWithInfo = ({
  label,
  tooltip,
  placement = "top",
  className = "",
}: StatLabelWithInfoProps) => {
  return (
    <StyledFormLabelRow
      className={className ? `${className} stat-label-with-info` : "stat-label-with-info"}
    >
      <span>{label}</span>
      <InfoTooltip content={tooltip} placement={placement} ariaLabel={`Help: ${label}`} />
    </StyledFormLabelRow>
  );
};

export default StatLabelWithInfo;

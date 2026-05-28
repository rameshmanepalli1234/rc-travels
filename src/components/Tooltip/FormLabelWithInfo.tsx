import InfoTooltip from "./InfoTooltip";
import { StyledFormLabelRow, StyledRequiredMark } from "./style";
import type { TooltipPlacement } from "./style";

export type FormLabelWithInfoProps = {
  htmlFor: string;
  label: string;
  tooltip: string;
  required?: boolean;
  className?: string;
  placement?: TooltipPlacement;
};

const FormLabelWithInfo = ({
  htmlFor,
  label,
  tooltip,
  required = false,
  className = "",
  placement = "top",
}: FormLabelWithInfoProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      <StyledFormLabelRow>
        <span>
          {label}
          {required && (
            <StyledRequiredMark aria-hidden="true"> *</StyledRequiredMark>
          )}
        </span>
        <InfoTooltip
          content={tooltip}
          placement={placement}
          ariaLabel={`Help: ${label}`}
        />
      </StyledFormLabelRow>
    </label>
  );
};

export default FormLabelWithInfo;

import Select from "react-select";
import {
  ENQUIRY_TYPE_OPTIONS,
  findEnquiryOption,
} from "./enquiryOptions";
import {
  EnquirySelectGlobalStyle,
  enquirySelectTheme,
} from "./enquirySelectOverrides";
import { getAppSelectStyles, type SelectOption } from "./selectStyles";

type EnquiryTypeSelectProps = {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
  inputId?: string;
};

const EnquiryTypeSelect = ({
  value,
  onChange,
  isDisabled = false,
  inputId = "contact-subject",
}: EnquiryTypeSelectProps) => {
  const selected =
    findEnquiryOption(value) ?? ENQUIRY_TYPE_OPTIONS[0];

  return (
    <div data-testid="select-contact-subject">
      <EnquirySelectGlobalStyle />
      <Select<SelectOption>
        inputId={inputId}
        instanceId={inputId}
        options={ENQUIRY_TYPE_OPTIONS}
        value={selected}
        onChange={(option) => {
          if (option) {
            onChange(option.value);
          }
        }}
        isDisabled={isDisabled}
        isSearchable={false}
        blurInputOnSelect
        styles={getAppSelectStyles(isDisabled)}
        theme={(theme) => ({
          ...theme,
          borderRadius: enquirySelectTheme.borderRadius,
          colors: {
            ...theme.colors,
            ...enquirySelectTheme.colors,
          },
        })}
        classNamePrefix="enquiry-select"
        aria-label="Enquiry type"
      />
    </div>
  );
};

export default EnquiryTypeSelect;

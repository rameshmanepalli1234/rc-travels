import type { SelectOption } from "./selectStyles";

export const ENQUIRY_TYPE_OPTIONS: SelectOption[] = [
  { value: "general", label: "General Enquiry" },
  { value: "package", label: "Tour Package Booking" },
  { value: "custom", label: "Custom Itinerary" },
  { value: "group", label: "Group Travel" },
];

export const findEnquiryOption = (
  value: string,
): SelectOption | undefined =>
  ENQUIRY_TYPE_OPTIONS.find((opt) => opt.value === value);

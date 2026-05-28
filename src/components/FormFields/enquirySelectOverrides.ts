import { createGlobalStyle } from "styled-components";

/**
 * Keeps a visible gap between options so hover/focus on one row
 * does not bleed into the selected row above it.
 */
export const EnquirySelectGlobalStyle = createGlobalStyle`
  .enquiry-select__menu-list {
    display: flex !important;
    flex-direction: column !important;
    gap: 6px !important;
    padding: 8px !important;
    background-color: #ffffff !important;
  }

  .enquiry-select__option {
    margin: 0 !important;
    padding: 10px 12px !important;
    border-radius: 8px !important;
    position: relative !important;
    isolation: isolate !important;
    flex-shrink: 0 !important;
    box-sizing: border-box !important;
    background-color: #ffffff !important;
    color: #1a1a1a !important;
  }

  .enquiry-select__option--is-selected {
    background-color: #4fbd39 !important;
    color: #ffffff !important;
    z-index: 1 !important;
  }

  .enquiry-select__option--is-selected:hover,
  .enquiry-select__option--is-selected:active {
    background-color: #4fbd39 !important;
    color: #ffffff !important;
  }

  .enquiry-select__option--is-focused:not(.enquiry-select__option--is-selected) {
    background-color: rgba(79, 189, 57, 0.12) !important;
    color: #1a1a1a !important;
    z-index: 2 !important;
  }

  .enquiry-select__option--is-focused:not(
      .enquiry-select__option--is-selected
    ):hover {
    background-color: rgba(79, 189, 57, 0.14) !important;
    color: #1a1a1a !important;
  }
`;

export const enquirySelectTheme = {
  borderRadius: 10,
  colors: {
    primary: "#4fbd39",
    primary25: "rgba(79, 189, 57, 0.12)",
    primary50: "rgba(79, 189, 57, 0.2)",
    primary75: "#3da82c",
  },
};

import type { GroupBase, StylesConfig } from "react-select";

export type SelectOption = { value: string; label: string };

const BRAND = "#4fbd39";
const BORDER = "#e0e8de";
const BORDER_FOCUS = BRAND;
const BG = "#f8faf8";
const TEXT = "#1a1a1a";
const MUTED = "#666";

export const getAppSelectStyles = <
  Option extends SelectOption,
  IsMulti extends boolean = false,
>(
  isDisabled = false,
): StylesConfig<Option, IsMulti, GroupBase<Option>> => ({
  control: (base, state) => ({
    ...base,
    minHeight: 44,
    borderRadius: 10,
    borderColor: state.isFocused ? BORDER_FOCUS : BORDER,
    backgroundColor: state.isFocused ? "#ffffff" : BG,
    boxShadow: state.isFocused ? "0 0 0 3px rgba(79, 189, 57, 0.15)" : "none",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.65 : 1,
    "&:hover": {
      borderColor: state.isFocused ? BORDER_FOCUS : "#c5d4c2",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "2px 10px",
    fontSize: 15,
  }),
  singleValue: (base) => ({
    ...base,
    color: TEXT,
  }),
  placeholder: (base) => ({
    ...base,
    color: "#999",
    fontSize: 15,
  }),
  input: (base) => ({
    ...base,
    color: TEXT,
    margin: 0,
    padding: 0,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
    border: `1px solid ${BORDER}`,
    zIndex: 9925,
    backgroundColor: "#ffffff",
  }),
  menuList: (base) => ({
    ...base,
    padding: 8,
    maxHeight: 260,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  }),
  option: (base, state) => {
    const isSelected = state.isSelected;
    const isFocused = state.isFocused && !isSelected;

    const backgroundColor = isSelected
      ? BRAND
      : isFocused
        ? "rgba(79, 189, 57, 0.12)"
        : "#ffffff";

    const color = isSelected ? "#ffffff" : TEXT;

    return {
      ...base,
      fontSize: 15,
      borderRadius: 8,
      margin: 0,
      padding: "10px 12px",
      minHeight: "auto",
      flexShrink: 0,
      position: "relative",
      isolation: "isolate",
      cursor: "pointer",
      color,
      backgroundColor,
      boxSizing: "border-box",
      ":hover": {
        backgroundColor: isSelected ? BRAND : "rgba(79, 189, 57, 0.14)",
        color: isSelected ? "#ffffff" : TEXT,
      },
      ":active": {
        backgroundColor: isSelected ? "#3da82c" : "rgba(79, 189, 57, 0.22)",
        color: isSelected ? "#ffffff" : TEXT,
      },
    };
  },
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? BRAND : MUTED,
    padding: "0 10px",
    "&:hover": {
      color: BRAND,
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: MUTED,
  }),
});

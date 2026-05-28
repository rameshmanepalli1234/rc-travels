import { createGlobalStyle } from "styled-components";

export const TripDatePickerStyles = createGlobalStyle`
  .trip-date-picker-wrap {
    width: 100%;
  }

  .trip-date-picker-wrap .react-datepicker-wrapper,
  .trip-date-picker-wrap .react-datepicker__input-container {
    width: 100%;
    display: block;
  }

  .trip-date-picker-input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 11px 14px;
    font-size: 16px;
    font-family: inherit;
    color: #1a1a1a;
    background: #ffffff;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:focus {
      border-color: #4fbd39;
      box-shadow: 0 0 0 3px rgba(79, 189, 57, 0.2);
    }

    &:disabled {
      opacity: 0.65;
      background: #f8fafc;
      cursor: not-allowed;
    }

    @media (min-width: 769px) {
      font-size: 15px;
    }
  }

  .trip-date-picker-popper {
    z-index: 9925 !important;
  }

  .trip-date-picker-calendar.react-datepicker {
    font-family: inherit;
    border: 1px solid #e0e8de;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    overflow: hidden;
  }

  .trip-date-picker-calendar .react-datepicker__header {
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    border-bottom: none;
    padding-top: 12px;
  }

  .trip-date-picker-calendar .react-datepicker__current-month,
  .trip-date-picker-calendar .react-datepicker-time__header,
  .trip-date-picker-calendar .react-datepicker-year-header {
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
  }

  .trip-date-picker-calendar .react-datepicker__day-name {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }

  .trip-date-picker-calendar .react-datepicker__navigation-icon::before {
    border-color: #ffffff;
  }

  .trip-date-picker-calendar .react-datepicker__day--selected,
  .trip-date-picker-calendar .react-datepicker__day--keyboard-selected {
    background-color: #4fbd39;
    color: #ffffff;
    border-radius: 8px;
  }

  .trip-date-picker-calendar .react-datepicker__day:hover {
    border-radius: 8px;
    background-color: rgba(79, 189, 57, 0.15);
  }

  .trip-date-picker-calendar .react-datepicker__day--disabled {
    color: #cbd5e1;
  }

  .trip-date-picker-calendar .react-datepicker__day--today {
    font-weight: 700;
    color: #2d7a22;
  }
`;

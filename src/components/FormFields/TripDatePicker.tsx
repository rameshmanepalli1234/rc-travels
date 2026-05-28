import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFromIso, isoDateFromDate, minPlannedTripDateIso } from "@utils";
import { TripDatePickerStyles } from "./datePickerStyles";

type TripDatePickerProps = {
  value: string;
  onChange: (isoDate: string) => void;
  isDisabled?: boolean;
  inputId?: string;
  placeholder?: string;
  minDateIso?: string;
};

const TripDatePicker = ({
  value,
  onChange,
  isDisabled = false,
  inputId = "booking-trip-date",
  placeholder = "Choose your travel date",
  minDateIso,
}: TripDatePickerProps) => {
  const minIso = minDateIso ?? minPlannedTripDateIso();
  const minDate = dateFromIso(minIso) ?? new Date();
  const selected = value ? dateFromIso(value) : null;

  return (
    <>
      <TripDatePickerStyles />
      <div className="trip-date-picker-wrap" data-testid="input-booking-date">
        <DatePicker
          id={inputId}
          selected={selected}
          onChange={(date: Date | null) => {
            if (date) {
              onChange(isoDateFromDate(date));
            } else {
              onChange("");
            }
          }}
          minDate={minDate}
          dateFormat="dd MMM yyyy"
          placeholderText={placeholder}
          disabled={isDisabled}
          showPopperArrow={false}
          popperClassName="trip-date-picker-popper"
          calendarClassName="trip-date-picker-calendar"
          className="trip-date-picker-input"
          autoComplete="off"
          required
        />
      </div>
    </>
  );
};

export default TripDatePicker;

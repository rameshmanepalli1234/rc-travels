import { FormEvent, useState } from "react";
import { FiX } from "react-icons/fi";
import type { TravelPackage } from "@utils";
import TripDatePicker from "@components/FormFields/TripDatePicker";
import FormLabelWithInfo from "@components/Tooltip/FormLabelWithInfo";
import Tooltip from "@components/Tooltip";
import {
  formatPackagePrice,
  sanitizePhoneInput,
  isValidBookingEmail,
  isValidBookingPhone,
  isValidPlannedTripDate,
  TOOLTIPS,
} from "@utils";
import {
  StyledCloseButton,
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledOverlay,
} from "./style";

export type BookingFormDetails = {
  email: string;
  phone: string;
  plannedTripDate: string;
};

type BookingModalProps = {
  pkg: TravelPackage;
  isOpen: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (details: BookingFormDetails) => void;
};

const BookingModal = ({
  pkg,
  isOpen,
  isSubmitting,
  onClose,
  onSubmit,
}: BookingModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plannedTripDate, setPlannedTripDate] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormError(null);

    if (!isValidBookingEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!isValidBookingPhone(phone)) {
      setFormError("Please enter a valid mobile number (at least 10 digits).");
      return;
    }

    if (!isValidPlannedTripDate(plannedTripDate)) {
      setFormError("Please choose your preferred travel date (today or later).");
      return;
    }

    onSubmit({
      email: email.trim(),
      phone: phone.trim(),
      plannedTripDate: plannedTripDate.trim(),
    });
  };

  return (
    <StyledOverlay
      role="presentation"
      onClick={onClose}
      data-testid="overlay-booking-modal"
    >
      <StyledModal
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <StyledCloseButton
          type="button"
          aria-label="Close booking form"
          onClick={onClose}
        >
          <FiX />
        </StyledCloseButton>

        <StyledModalHeader>
          <h2 id="booking-modal-title">Book this tour</h2>
          <p>
            Share your contact details and when you would like to travel to
            confirm your booking.
          </p>
        </StyledModalHeader>

        <StyledModalBody>
          <div className="booking-tour-summary">
            <p className="booking-tour-name">{pkg.title}</p>
            <p className="booking-tour-meta">
              {pkg.location} · {pkg.duration}
            </p>
            <p className="booking-tour-price">
              {formatPackagePrice(pkg.price)}{" "}
              <span style={{ fontSize: 13, fontWeight: 600 }}>per person</span>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="booking-field">
              <FormLabelWithInfo
                className="booking-label"
                htmlFor="booking-email"
                label="Email address"
                tooltip={TOOLTIPS.booking.email}
                required
              />
              <input
                id="booking-email"
                className="booking-input"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                data-testid="input-booking-email"
              />
            </div>

            <div className="booking-field">
              <FormLabelWithInfo
                className="booking-label"
                htmlFor="booking-phone"
                label="Mobile number"
                tooltip={TOOLTIPS.booking.phone}
                required
              />
              <input
                id="booking-phone"
                className="booking-input"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(sanitizePhoneInput(e.target.value))}
                disabled={isSubmitting}
                required
                data-testid="input-booking-phone"
              />
            </div>

            <div className="booking-field">
              <FormLabelWithInfo
                className="booking-label"
                htmlFor="booking-trip-date"
                label="Preferred travel date"
                tooltip={TOOLTIPS.booking.travelDate}
                required
              />
              <TripDatePicker
                value={plannedTripDate}
                onChange={setPlannedTripDate}
                isDisabled={isSubmitting}
                placeholder="Choose your travel date"
              />
            </div>

            {formError && (
              <p className="booking-error" role="alert">
                {formError}
              </p>
            )}

            <div className="booking-actions">
              <button
                type="button"
                className="booking-btn booking-btn-cancel"
                onClick={onClose}
                disabled={isSubmitting}
                data-testid="button-booking-cancel"
              >
                Cancel
              </button>
              <Tooltip content={TOOLTIPS.booking.confirm} placement="top">
                <button
                  type="submit"
                  className="booking-btn booking-btn-submit"
                  disabled={isSubmitting}
                  data-testid="button-booking-submit"
                >
                  {isSubmitting ? "Sending…" : "Confirm booking"}
                </button>
              </Tooltip>
            </div>
          </form>
        </StyledModalBody>
      </StyledModal>
    </StyledOverlay>
  );
};

export default BookingModal;

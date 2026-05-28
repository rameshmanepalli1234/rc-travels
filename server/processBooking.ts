import { sendBookingEmail, BookingEmailError } from "./sendBookingEmail";
import {
  validateBookingPayload,
  type BookingPayload,
} from "./bookingRequest";

export type BookingResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

export const processBooking = async (body: unknown): Promise<BookingResult> => {
  const validated = validateBookingPayload(body);
  if (!validated.ok) {
    return {
      ok: false,
      error: validated.error,
      status: validated.status,
    };
  }

  try {
    await sendBookingEmail(validated.data);
    return { ok: true };
  } catch (error) {
    if (error instanceof BookingEmailError) {
      return { ok: false, error: error.message, status: error.status };
    }

    return {
      ok: false,
      error: "Unable to send booking email. Please try again or call us.",
      status: 500,
    };
  }
};

export type { BookingPayload };

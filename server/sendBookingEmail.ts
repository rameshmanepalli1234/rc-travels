import { sendSiteEmail, SiteEmailError } from "./sendSiteEmail";
import {
  buildBookingEmailHtml,
  type BookingPayload,
} from "./bookingRequest";

export { SiteEmailError as BookingEmailError };

export const sendBookingEmail = async (
  booking: BookingPayload,
): Promise<void> => {
  await sendSiteEmail({
    subject: `Booking: ${booking.tourName} — ${booking.plannedTripDate} — ${booking.customerEmail}`,
    html: buildBookingEmailHtml(booking),
    replyTo: booking.customerEmail,
    fromLabel: "Ramesh Tours Bookings",
  });
};

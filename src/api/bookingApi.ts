import type { TravelPackage } from "@utils";
import { buildPackageDescription } from "@utils";

const BOOKING_API_BASE =
  process.env.REACT_APP_BOOKING_API ?? "/api/booking";

export type SubmitBookingInput = {
  pkg: TravelPackage;
  email: string;
  phone: string;
  plannedTripDate: string;
};

export type SubmitBookingResult =
  | { success: true; message: string }
  | { success: false; error: string };

export const submitPackageBooking = async ({
  pkg,
  email,
  phone,
  plannedTripDate,
}: SubmitBookingInput): Promise<SubmitBookingResult> => {
  try {
    const response = await fetch(BOOKING_API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        packageId: pkg.id,
        tourName: pkg.title,
        price: pkg.price,
        description: buildPackageDescription(pkg, plannedTripDate),
        location: pkg.location,
        duration: pkg.duration,
        plannedTripDate: plannedTripDate.trim(),
        customerEmail: email.trim(),
        customerPhone: phone.trim(),
      }),
    });

    const data = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      return {
        success: false,
        error: data.error ?? "Booking could not be sent. Please try again.",
      };
    }

    return {
      success: true,
      message: data.message ?? "Your booking request was sent successfully!",
    };
  } catch {
    return {
      success: false,
      error: "Network error. Check your connection and try again.",
    };
  }
};

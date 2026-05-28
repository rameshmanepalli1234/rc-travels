import type { Handler } from "@netlify/functions";
import { isBookingEmailConfigured } from "../../server/bookingEnv";
import { processBooking } from "../../server/processBooking";

const jsonHeaders = { "Content-Type": "application/json" };

export const handler: Handler = async (event) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({
        status: "ok",
        emailConfigured: isBookingEmailConfigured(),
      }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body: unknown;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid JSON body." }),
    };
  }

  const result = await processBooking(body);
  if (!result.ok) {
    return {
      statusCode: result.status,
      headers: jsonHeaders,
      body: JSON.stringify({ error: result.error }),
    };
  }

  return {
    statusCode: 200,
    headers: jsonHeaders,
    body: JSON.stringify({
      success: true,
      message: "Booking request sent successfully.",
    }),
  };
};

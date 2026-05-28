/** Booking email env — safe for Netlify (no filesystem). */

const trim = (value: string | undefined): string | undefined =>
  value?.trim() || undefined;

export const getBookingNotifyEmail = (): string | undefined =>
  trim(process.env.BOOKING_NOTIFY_EMAIL) ??
  trim(process.env.BOOKING_SMTP_USER) ??
  "rameshtravelszone@gmail.com";

export const getResendApiKey = (): string | undefined =>
  trim(process.env.BOOKING_RESEND_API_KEY) ?? trim(process.env.RESEND_API_KEY);

export const getResendFromEmail = (): string | undefined =>
  trim(process.env.BOOKING_RESEND_FROM) ?? "onboarding@resend.dev";

export const getSmtpConfig = (): {
  host: string;
  port: number;
  user: string;
  pass: string;
} | null => {
  const user = trim(process.env.BOOKING_SMTP_USER);
  const pass = trim(process.env.BOOKING_SMTP_PASS);
  if (!user || !pass) {
    return null;
  }

  return {
    host: trim(process.env.BOOKING_SMTP_HOST) ?? "smtp.gmail.com",
    port: Number(process.env.BOOKING_SMTP_PORT ?? 587),
    user,
    pass,
  };
};

export const isBookingEmailConfigured = (): boolean =>
  Boolean(getResendApiKey() || getSmtpConfig());

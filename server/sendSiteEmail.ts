import {
  getBookingNotifyEmail,
  getResendApiKey,
  getResendFromEmail,
  getSmtpConfig,
  isBookingEmailConfigured,
} from "./bookingEnv";

export class SiteEmailError extends Error {
  readonly status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = "SiteEmailError";
    this.status = status;
  }
}

/** @deprecated use SiteEmailError */
export const BookingEmailError = SiteEmailError;

export type SiteEmailPayload = {
  subject: string;
  html: string;
  replyTo: string;
  fromLabel?: string;
};

const mapResendError = (status: number, detail: string): SiteEmailError => {
  try {
    const parsed = JSON.parse(detail) as {
      message?: string;
      name?: string;
    };
    const msg = parsed.message ?? "";

    if (
      status === 403 &&
      (parsed.name === "validation_error" ||
        msg.includes("only send testing emails to your own email") ||
        msg.includes("verify a domain"))
    ) {
      return new SiteEmailError(
        "Resend test mode: use BOOKING_RESEND_FROM=onboarding@resend.dev and BOOKING_NOTIFY_EMAIL=your Resend signup email. Personal emails cannot be used as FROM until you verify a domain at resend.com/domains.",
        503,
      );
    }

    if (msg) {
      return new SiteEmailError(`Failed to send email: ${msg}`, 502);
    }
  } catch {
    /* use raw detail below */
  }

  return new SiteEmailError(
    `Failed to send email (${status}). ${detail}`.trim(),
    502,
  );
};

const sendViaResend = async (
  payload: SiteEmailPayload,
  to: string,
): Promise<void> => {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    throw new SiteEmailError("Resend API key is not configured.", 503);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getResendFromEmail(),
      to: [to],
      reply_to: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw mapResendError(response.status, detail);
  }
};

const sendViaSmtp = async (
  payload: SiteEmailPayload,
  to: string,
): Promise<void> => {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new SiteEmailError("SMTP is not configured.", 503);
  }

  let nodemailer: typeof import("nodemailer");
  try {
    nodemailer = await import("nodemailer");
  } catch {
    throw new SiteEmailError(
      "Email package missing. Run yarn install or set BOOKING_RESEND_API_KEY.",
      503,
    );
  }

  const fromLabel = payload.fromLabel ?? "Ramesh Tours & Travels";
  const transport = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transport.sendMail({
    from: `"${fromLabel}" <${smtp.user}>`,
    to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    html: payload.html,
  });
};

export const sendSiteEmail = async (payload: SiteEmailPayload): Promise<void> => {
  if (!isBookingEmailConfigured()) {
    throw new SiteEmailError(
      "Email is not configured. Set BOOKING_RESEND_API_KEY or BOOKING_SMTP_USER and BOOKING_SMTP_PASS in environment variables.",
      503,
    );
  }

  const to = getBookingNotifyEmail();
  if (!to) {
    throw new SiteEmailError("Notify email (BOOKING_NOTIFY_EMAIL) is not set.", 503);
  }

  if (getResendApiKey()) {
    await sendViaResend(payload, to);
    return;
  }

  await sendViaSmtp(payload, to);
};

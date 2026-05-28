import {
  isValidBookingEmail,
  isValidBookingPhone,
} from "./bookingRequest";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  subjectLabel: string;
  message: string;
};

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Enquiry",
  package: "Tour Package Booking",
  custom: "Custom Itinerary",
  group: "Group Travel",
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const validateContactPayload = (
  body: unknown,
):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string; status: number } => {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body.", status: 400 };
  }

  const raw = body as Record<string, unknown>;
  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const phone = String(raw.phone ?? "").trim();
  const subject = String(raw.subject ?? "general").trim();
  const message = String(raw.message ?? "").trim();

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name.", status: 400 };
  }

  if (!isValidBookingEmail(email)) {
    return { ok: false, error: "Enter a valid email address.", status: 400 };
  }

  if (!isValidBookingPhone(phone)) {
    return {
      ok: false,
      error: "Enter a valid mobile number (at least 10 digits).",
      status: 400,
    };
  }

  if (message.length < 10) {
    return {
      ok: false,
      error: "Message must be at least 10 characters.",
      status: 400,
    };
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? "General Enquiry";

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      subject,
      subjectLabel,
      message,
    },
  };
};

export const buildContactEmailHtml = (contact: ContactPayload): string => {
  const rows = [
    ["Name", contact.name],
    ["Email", contact.email],
    ["Phone", contact.phone],
    ["Enquiry type", contact.subjectLabel],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#334155;border-bottom:1px solid #e2e8f0;">${label}</td><td style="padding:8px 12px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:linear-gradient(135deg,#4fbd39,#2d8a47);padding:20px 24px;">
      <h1 style="margin:0;color:#fff;font-size:20px;">New contact form message</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">Ramesh Tours &amp; Travels — Send Us a Message</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${tableRows}</table>
      <h2 style="margin:24px 0 8px;font-size:15px;color:#0f172a;">Message</h2>
      <p style="margin:0;padding:12px;background:#f1f5f9;border-radius:8px;font-size:14px;line-height:1.55;color:#334155;white-space:pre-wrap;">${escapeHtml(contact.message)}</p>
    </div>
  </div>
</body>
</html>`;
};

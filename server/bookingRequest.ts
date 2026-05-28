export type BookingPayload = {
  packageId?: number;
  tourName: string;
  price: number;
  description: string;
  location?: string;
  duration?: string;
  plannedTripDate: string;
  customerEmail: string;
  customerPhone: string;
};

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const isValidPlannedTripDate = (dateStr: string): boolean => {
  const trimmed = dateStr.trim();
  if (!ISO_DATE_PATTERN.test(trimmed)) {
    return false;
  }

  const planned = new Date(`${trimmed}T12:00:00`);
  if (Number.isNaN(planned.getTime())) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  planned.setHours(0, 0, 0, 0);
  return planned >= today;
};

export const formatPlannedTripDateLabel = (isoDate: string): string =>
  new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate.trim()}T12:00:00`));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneDigits = (phone: string): string => phone.replace(/\D/g, "");

export const isValidBookingEmail = (email: string): boolean =>
  EMAIL_PATTERN.test(email.trim());

export const isValidBookingPhone = (phone: string): boolean => {
  const digits = phoneDigits(phone);
  return digits.length >= 10 && digits.length <= 15;
};

export const validateBookingPayload = (
  body: unknown,
):
  | { ok: true; data: BookingPayload }
  | { ok: false; error: string; status: number } => {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body.", status: 400 };
  }

  const raw = body as Record<string, unknown>;
  const tourName = String(raw.tourName ?? "").trim();
  const description = String(raw.description ?? "").trim();
  const customerEmail = String(raw.customerEmail ?? "").trim();
  const customerPhone = String(raw.customerPhone ?? "").trim();
  const plannedTripDate = String(raw.plannedTripDate ?? "").trim();
  const price = Number(raw.price);
  const packageId =
    raw.packageId === undefined || raw.packageId === null
      ? undefined
      : Number(raw.packageId);

  if (!tourName) {
    return { ok: false, error: "Tour name is required.", status: 400 };
  }

  if (!Number.isFinite(price) || price < 0) {
    return { ok: false, error: "Valid tour price is required.", status: 400 };
  }

  if (!description) {
    return { ok: false, error: "Tour description is required.", status: 400 };
  }

  if (!isValidBookingEmail(customerEmail)) {
    return { ok: false, error: "Enter a valid email address.", status: 400 };
  }

  if (!isValidBookingPhone(customerPhone)) {
    return {
      ok: false,
      error: "Enter a valid mobile number (at least 10 digits).",
      status: 400,
    };
  }

  if (!isValidPlannedTripDate(plannedTripDate)) {
    return {
      ok: false,
      error: "Select a valid preferred travel date (today or later).",
      status: 400,
    };
  }

  return {
    ok: true,
    data: {
      packageId: Number.isFinite(packageId) ? packageId : undefined,
      tourName,
      price,
      description,
      location: String(raw.location ?? "").trim() || undefined,
      duration: String(raw.duration ?? "").trim() || undefined,
      plannedTripDate,
      customerEmail,
      customerPhone,
    },
  };
};

export const formatInrPrice = (price: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export const buildBookingEmailHtml = (booking: BookingPayload): string => {
  const dateLabel = formatPlannedTripDateLabel(booking.plannedTripDate);
  const dateIso = escapeHtml(booking.plannedTripDate);

  const rows = [
    ["Tour", booking.tourName],
    ["Preferred travel date", dateLabel],
    ["Date selected", dateIso],
    ["Price (per person)", formatInrPrice(booking.price)],
    ["Location", booking.location ?? "—"],
    ["Duration", booking.duration ?? "—"],
    ["Guest email", booking.customerEmail],
    ["Guest mobile", booking.customerPhone],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#334155;border-bottom:1px solid #e2e8f0;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;background:#f8fafc;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:linear-gradient(135deg,#4fbd39,#2d8a47);padding:20px 24px;">
      <h1 style="margin:0;color:#fff;font-size:20px;">New tour booking request</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">Ramesh Tours &amp; Travels</p>
    </div>
    <div style="padding:24px;">
      <div style="margin-bottom:20px;padding:16px 18px;background:#ecfdf5;border-radius:10px;border:1px solid #86efac;">
        <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#166534;">Preferred travel date</p>
        <p style="margin:0;font-size:18px;font-weight:800;color:#14532d;">${escapeHtml(dateLabel)}</p>
        <p style="margin:6px 0 0;font-size:13px;color:#15803d;">${dateIso}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${tableRows}</table>
      <h2 style="margin:24px 0 8px;font-size:15px;color:#0f172a;">Package details</h2>
      <p style="margin:0;padding:12px;background:#f1f5f9;border-radius:8px;font-size:14px;line-height:1.55;color:#334155;white-space:pre-wrap;">${escapeHtml(booking.description)}</p>
    </div>
  </div>
</body>
</html>`;
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

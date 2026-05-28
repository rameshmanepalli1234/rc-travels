import { sendSiteEmail, SiteEmailError } from "./sendSiteEmail";
import {
  buildContactEmailHtml,
  validateContactPayload,
} from "./contactRequest";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

export const processContact = async (body: unknown): Promise<ContactResult> => {
  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return {
      ok: false,
      error: validated.error,
      status: validated.status,
    };
  }

  const contact = validated.data;

  try {
    await sendSiteEmail({
      subject: `Contact: ${contact.subjectLabel} — ${contact.name}`,
      html: buildContactEmailHtml(contact),
      replyTo: contact.email,
      fromLabel: "Ramesh Tours Contact",
    });
    return { ok: true };
  } catch (error) {
    if (error instanceof SiteEmailError) {
      return { ok: false, error: error.message, status: error.status };
    }

    return {
      ok: false,
      error: "Unable to send your message. Please try again or call us.",
      status: 500,
    };
  }
};

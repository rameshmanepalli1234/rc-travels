const CONTACT_API_BASE =
  process.env.REACT_APP_CONTACT_API ?? "/api/contact";

export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type SubmitContactResult =
  | { success: true; message: string }
  | { success: false; error: string };

export const submitContactMessage = async (
  form: ContactFormInput,
): Promise<SubmitContactResult> => {
  try {
    const response = await fetch(CONTACT_API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      return {
        success: false,
        error: data.error ?? "Could not send your message. Please try again.",
      };
    }

    return {
      success: true,
      message: data.message ?? "Thank you! We will contact you soon.",
    };
  } catch {
    return {
      success: false,
      error: "Network error. Check your connection and try again.",
    };
  }
};

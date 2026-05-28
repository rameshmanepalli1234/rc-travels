/** Gemini env helpers — safe for Netlify Functions (no fs, dotenv, or import.meta). */

const normalizeEnvValue = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim().replace(/^['"]|['"]$/g, "");
  return trimmed.length > 0 ? trimmed : undefined;
};

export const getGeminiApiKey = (): string | undefined => {
  const key =
    normalizeEnvValue(process.env.GEMINI_API_KEY) ??
    normalizeEnvValue(process.env.GOOGLE_API_KEY);

  if (!key || /your-|placeholder|replace-me/i.test(key)) {
    return undefined;
  }

  return key;
};

export const getGeminiModel = (): string =>
  normalizeEnvValue(process.env.GEMINI_MODEL) ?? "gemini-2.5-flash";

export const isGeminiConfigured = (): boolean => Boolean(getGeminiApiKey());

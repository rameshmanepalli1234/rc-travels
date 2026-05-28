import type { Handler } from "@netlify/functions";

const normalize = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }
  const trimmed = value.trim().replace(/^['"]|['"]$/g, "");
  return trimmed.length > 0 ? trimmed : undefined;
};

const handler: Handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    status: "ok",
    geminiConfigured: Boolean(
      normalize(process.env.GEMINI_API_KEY) ??
        normalize(process.env.GOOGLE_API_KEY),
    ),
    model: normalize(process.env.GEMINI_MODEL) ?? "gemini-2.5-flash",
  }),
});

export { handler };

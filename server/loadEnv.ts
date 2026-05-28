import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

for (const fileName of [".env.local", ".env"]) {
  const filePath = path.join(projectRoot, fileName);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

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

export const assistantPort = Number(process.env.ASSISTANT_PORT ?? 4000);

export const projectRootPath = projectRoot;

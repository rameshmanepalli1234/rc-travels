import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

const envFiles = [".env.local", ".env"];

for (const fileName of envFiles) {
  const filePath = path.join(projectRoot, fileName);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

// CopilotKit telemetry can crash the Express server after agent runs
// (lambdaClient.send is not a function). Opt out by default in local dev.
process.env.COPILOTKIT_TELEMETRY_DISABLED ??= "true";

const PLACEHOLDER_KEY_PATTERN =
  /your-openai|sk-your|placeholder|replace-me|xxx/i;

const normalizeEnvValue = (value: string | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim().replace(/^['"]|['"]$/g, "");
  return trimmed.length > 0 ? trimmed : undefined;
};

export const getOpenAiApiKey = (): string | undefined => {
  const key = normalizeEnvValue(process.env.OPENAI_API_KEY);

  if (!key || PLACEHOLDER_KEY_PATTERN.test(key)) {
    return undefined;
  }

  return key;
};

export const isCopilotConfigured = (): boolean => Boolean(getOpenAiApiKey());

export const projectRootPath = projectRoot;

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

export {
  getGeminiApiKey,
  getGeminiModel,
  isGeminiConfigured,
} from "./geminiEnv";

const resolveProjectRoot = (): string => {
  const metaUrl =
    typeof import.meta !== "undefined" ? import.meta.url : undefined;

  if (metaUrl) {
    return path.resolve(path.dirname(fileURLToPath(metaUrl)), "..");
  }

  return process.cwd();
};

const projectRoot = resolveProjectRoot();

for (const fileName of [".env.local", ".env"]) {
  const filePath = path.join(projectRoot, fileName);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath });
  }
}

export const assistantPort = Number(process.env.ASSISTANT_PORT ?? 4000);

export const projectRootPath = projectRoot;

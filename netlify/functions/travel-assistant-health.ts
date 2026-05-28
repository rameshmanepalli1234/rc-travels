import type { Config } from "@netlify/functions";
import { getGeminiModel, isGeminiConfigured } from "../../server/loadEnv";

export default async (): Promise<Response> =>
  Response.json({
    status: "ok",
    geminiConfigured: isGeminiConfigured(),
    model: getGeminiModel(),
  });

export const config: Config = {
  path: "/api/travel-assistant/health",
};

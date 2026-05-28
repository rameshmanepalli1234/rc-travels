/** Must run before @copilotkit/runtime (telemetry singleton reads env at import time). */
import "./loadEnv";

import cors from "cors";
import express from "express";
import {
  BuiltInAgent,
  CopilotRuntime,
  createCopilotExpressHandler,
} from "@copilotkit/runtime/v2";
import {
  getOpenAiApiKey,
  isCopilotConfigured,
  projectRootPath,
} from "./loadEnv";

const port = Number(process.env.COPILOTKIT_PORT ?? 4000);
const openAiApiKey = getOpenAiApiKey();

if (!openAiApiKey) {
  console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CopilotKit: OPENAI_API_KEY is missing

  Chat cannot send or receive messages without it.

  1. Copy the example env file:
       cp .env.example .env

  2. Open .env and set your key:
       OPENAI_API_KEY=sk-...

  3. Restart: yarn start

  Project root: ${projectRootPath}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
} else {
  console.log("CopilotKit: OPENAI_API_KEY loaded.");
}

const travelAssistantPrompt = `You are the AI travel assistant for Ramesh Tours & Travels (Rajamahendravaram, Andhra Pradesh).
Help visitors with tour packages across India, pricing questions, trip planning, and booking guidance.
Be friendly, concise, and accurate. If you are unsure, suggest contacting the team via the Contact Us section.
For bookings, direct users to use Book Now or the contact form. Do not invent prices or packages not in context.`;

const defaultAgentConfig = {
  model: "openai/gpt-4o-mini" as const,
  prompt: travelAssistantPrompt,
  ...(openAiApiKey ? { apiKey: openAiApiKey } : {}),
};

const runtime = new CopilotRuntime({
  agents: {
    default: new BuiltInAgent(defaultAgentConfig),
  },
});

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.get("/api/copilotkit/health", (_req, res) => {
  res.json({
    status: "ok",
    openaiConfigured: isCopilotConfigured(),
  });
});

app.use(
  createCopilotExpressHandler({
    runtime,
    basePath: "/api/copilotkit",
    mode: "multi-route",
    cors: true,
  }),
);

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "copilotkit-runtime",
    openaiConfigured: isCopilotConfigured(),
  });
});

app.listen(port, () => {
  console.log(
    `CopilotKit runtime listening at http://localhost:${port}/api/copilotkit`,
  );
});

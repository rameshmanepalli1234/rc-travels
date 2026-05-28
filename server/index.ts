import cors from "cors";
import express from "express";
import {
  mapGeminiError,
  streamGeminiReply,
  validateChatMessages,
  type ChatMessage,
} from "./geminiChat";
import {
  assistantPort,
  getGeminiApiKey,
  getGeminiModel,
  isGeminiConfigured,
  projectRootPath,
} from "./loadEnv";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/travel-assistant/health", (_req, res) => {
  res.json({
    status: "ok",
    geminiConfigured: isGeminiConfigured(),
    model: getGeminiModel(),
  });
});

app.post("/api/travel-assistant/chat", async (req, res) => {
  const messages = req.body?.messages as unknown;

  if (!validateChatMessages(messages)) {
    res.status(400).json({ error: "messages must be a non-empty array of user/assistant text." });
    return;
  }

  if (!getGeminiApiKey()) {
    res.status(503).json({
      error:
        "GEMINI_API_KEY is not set. Get a free key at https://aistudio.google.com/apikey",
    });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  try {
    for await (const text of streamGeminiReply(messages as ChatMessage[])) {
      res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    const mapped = mapGeminiError(error);
    if (!res.headersSent) {
      res.status(mapped.status).json({ error: mapped.message });
      return;
    }

    res.write(`data: ${JSON.stringify({ error: mapped.message })}\n\n`);
    res.end();
  }
});

app.listen(assistantPort, () => {
  if (!isGeminiConfigured()) {
    console.warn(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Travel Assistant: GEMINI_API_KEY is missing

  1. Get a free key: https://aistudio.google.com/apikey
  2. Add to .env: GEMINI_API_KEY=your_key
  3. Restart: yarn start

  Project root: ${projectRootPath}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
  } else {
    console.log("Travel Assistant (Gemini): API key loaded.");
  }

  console.log(
    `Travel Assistant API listening at http://localhost:${assistantPort}/api/travel-assistant`,
  );
});

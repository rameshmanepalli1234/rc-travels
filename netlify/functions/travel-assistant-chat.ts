import type { Handler } from "@netlify/functions";
import { getGeminiApiKey } from "../../server/geminiEnv";
import {
  mapGeminiError,
  streamGeminiReply,
  validateChatMessages,
  type ChatMessage,
} from "../../server/geminiChat";

const sseHeaders = {
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
};

const buildSseBody = async (messages: ChatMessage[]): Promise<string> => {
  let body = "";
  try {
    for await (const text of streamGeminiReply(messages)) {
      body += `data: ${JSON.stringify({ text })}\n\n`;
    }
    body += "data: [DONE]\n\n";
  } catch (error) {
    const mapped = mapGeminiError(error);
    body += `data: ${JSON.stringify({ error: mapped.message })}\n\n`;
  }
  return body;
};

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let parsed: { messages?: unknown };
  try {
    parsed = JSON.parse(event.body ?? "{}") as { messages?: unknown };
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON body." }),
    };
  }

  if (!validateChatMessages(parsed.messages)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "messages must be a non-empty array of user/assistant text.",
      }),
    };
  }

  if (!getGeminiApiKey()) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error:
          "GEMINI_API_KEY is not set on the server. Add it in Netlify environment variables and redeploy.",
      }),
    };
  }

  const body = await buildSseBody(parsed.messages);

  return {
    statusCode: 200,
    headers: sseHeaders,
    body,
  };
};

export { handler };

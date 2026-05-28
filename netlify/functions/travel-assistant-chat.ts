import type { Config } from "@netlify/functions";
import {
  getGeminiApiKey,
} from "../../server/loadEnv";
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

const buildSseResponse = (messages: ChatMessage[]): Response => {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const text of streamGeminiReply(messages)) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text })}\n\n`),
          );
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } catch (error) {
        const mapped = mapGeminiError(error);
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: mapped.message })}\n\n`),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, { headers: sseHeaders });
};

export default async (request: Request): Promise<Response> => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body: { messages?: unknown };
  try {
    body = (await request.json()) as { messages?: unknown };
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!validateChatMessages(body.messages)) {
    return Response.json(
      {
        error:
          "messages must be a non-empty array of user/assistant text.",
      },
      { status: 400 },
    );
  }

  if (!getGeminiApiKey()) {
    return Response.json(
      {
        error:
          "GEMINI_API_KEY is not set on the server. Add it in Netlify environment variables and redeploy.",
      },
      { status: 503 },
    );
  }

  return buildSseResponse(body.messages);
};

export const config: Config = {
  path: "/api/travel-assistant/chat",
};

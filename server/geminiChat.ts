import {
  GoogleGenerativeAI,
  type Content,
  type Part,
} from "@google/generative-ai";
import { buildSystemInstruction } from "./buildSystemInstruction";
import { getGeminiApiKey, getGeminiModel } from "./geminiEnv";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

const toGeminiRole = (role: ChatRole): "user" | "model" =>
  role === "assistant" ? "model" : "user";

const toGeminiHistory = (messages: ChatMessage[]): Content[] =>
  messages.map((message) => ({
    role: toGeminiRole(message.role),
    parts: [{ text: message.content }] satisfies Part[],
  }));

/** Gemini requires history to start with role "user", not "model". */
const splitForGemini = (
  messages: ChatMessage[],
): { history: ChatMessage[]; lastUser: ChatMessage } => {
  let trimmed = [...messages];

  while (trimmed.length > 0 && trimmed[0]?.role === "assistant") {
    trimmed = trimmed.slice(1);
  }

  const last = trimmed[trimmed.length - 1];
  if (!last || last.role !== "user") {
    throw new Error("INVALID_MESSAGES");
  }

  return {
    history: trimmed.slice(0, -1),
    lastUser: last,
  };
};

export const validateChatMessages = (
  messages: unknown,
): messages is ChatMessage[] => {
  if (!Array.isArray(messages) || messages.length === 0) {
    return false;
  }

  return messages.every(
    (entry) =>
      entry &&
      typeof entry === "object" &&
      (entry.role === "user" || entry.role === "assistant") &&
      typeof entry.content === "string" &&
      entry.content.trim().length > 0,
  );
};

export const streamGeminiReply = async function* (
  messages: ChatMessage[],
): AsyncGenerator<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("GEMINI_NOT_CONFIGURED");
  }

  const { history: historyMessages, lastUser } = splitForGemini(messages);
  const history = toGeminiHistory(historyMessages);
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: getGeminiModel(),
    systemInstruction: buildSystemInstruction(),
  });

  const chat = model.startChat({ history });
  const result = await chat.sendMessageStream(lastUser.content);

  for await (const chunk of result.stream) {
    const text = chunk.text();
    if (text) {
      yield text;
    }
  }
};

export const mapGeminiError = (error: unknown): { status: number; message: string } => {
  const message = error instanceof Error ? error.message : String(error);

  if (message === "GEMINI_NOT_CONFIGURED") {
    return {
      status: 503,
      message:
        "Gemini API key is missing. Add GEMINI_API_KEY to .env and restart yarn start.",
    };
  }

  if (message === "INVALID_MESSAGES") {
    return { status: 400, message: "Invalid chat messages." };
  }

  if (/API key not valid|API_KEY_INVALID/i.test(message)) {
    return {
      status: 401,
      message: "Invalid Gemini API key. Check GEMINI_API_KEY in .env.",
    };
  }

  if (/leaked|403 Forbidden|PERMISSION_DENIED/i.test(message)) {
    return {
      status: 403,
      message:
        "Your Gemini API key was disabled (often after it was exposed publicly). Create a new key at aistudio.google.com/apikey, update GEMINI_API_KEY in Netlify, then redeploy.",
    };
  }

  if (/quota|RESOURCE_EXHAUSTED|429|Too Many Requests/i.test(message)) {
    const modelHint = /limit: 0/i.test(message)
      ? " Set GEMINI_MODEL=gemini-2.5-flash in .env and restart yarn start."
      : " Wait a minute and try again.";
    return {
      status: 429,
      message: `Gemini rate limit or quota exceeded.${modelHint}`,
    };
  }

  if (/First content should be with role/i.test(message)) {
    return {
      status: 400,
      message: "Chat history format error. Please refresh and try again.",
    };
  }

  if (/not found|404|is not supported/i.test(message)) {
    return {
      status: 400,
      message: `Gemini model unavailable. Try GEMINI_MODEL=gemini-2.0-flash-lite in .env.`,
    };
  }

  return {
    status: 500,
    message:
      process.env.NODE_ENV === "development"
        ? `Travel Assistant error: ${message}`
        : "Travel Assistant could not complete your request.",
  };
};

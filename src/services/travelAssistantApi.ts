export type TravelAssistantMessage = {
  role: "user" | "assistant";
  content: string;
};

const API_BASE =
  process.env.REACT_APP_TRAVEL_ASSISTANT_API ?? "/api/travel-assistant";

export type TravelAssistantHealth = {
  status: string;
  geminiConfigured?: boolean;
  model?: string;
};

export const fetchTravelAssistantHealth =
  async (): Promise<TravelAssistantHealth> => {
    const response = await fetch(`${API_BASE}/health`);
    if (!response.ok) {
      throw new Error("Travel Assistant server is not reachable.");
    }
    return (await response.json()) as TravelAssistantHealth;
  };

export const streamTravelAssistantChat = async (
  messages: TravelAssistantMessage[],
  onChunk: (text: string) => void,
  onError: (message: string) => void,
): Promise<void> => {
  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    onError(body?.error ?? `Request failed (${response.status})`);
    return;
  }

  if (!response.body) {
    onError("No response stream from server.");
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const processLine = (line: string): void => {
    if (!line.startsWith("data: ")) {
      return;
    }

    const payload = line.slice(6).trim();
    if (payload === "[DONE]") {
      return;
    }

    try {
      const parsed = JSON.parse(payload) as { text?: string; error?: string };
      if (parsed.error) {
        onError(parsed.error);
        return;
      }
      if (parsed.text) {
        onChunk(parsed.text);
      }
    } catch {
      /* ignore malformed chunks */
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      processLine(line);
    }
  }

  if (buffer.trim()) {
    processLine(buffer);
  }
};

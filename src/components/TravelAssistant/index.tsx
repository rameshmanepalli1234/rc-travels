import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { BRAND_NAME, TOOLTIPS } from "@utils";
import InfoTooltip from "@components/Tooltip/InfoTooltip";
import {
  fetchTravelAssistantHealth,
  streamTravelAssistantChat,
  type TravelAssistantMessage,
} from "@/services/travelAssistantApi";
import {
  StyledAlert,
  StyledBubble,
  StyledFab,
  StyledHeader,
  StyledInputRow,
  StyledMessages,
  StyledPanel,
  StyledPoweredBy,
  StyledTyping,
} from "./style";

const INITIAL_MESSAGE: TravelAssistantMessage = {
  role: "assistant",
  content:
    "Hi! I'm your Travel Assistant powered by Google Gemini. Ask me about tours, packages, or bookings across India.",
};

const TravelAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<TravelAssistantMessage[]>([
    INITIAL_MESSAGE,
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [setupError, setSetupError] = useState<string | null>(null);
  const [streamError, setStreamError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const checkHealth = async (): Promise<void> => {
      try {
        const health = await fetchTravelAssistantHealth();
        if (!cancelled && !health.geminiConfigured) {
          setSetupError(
            process.env.NODE_ENV === "production"
              ? "Add GEMINI_API_KEY in Netlify → Site configuration → Environment variables, then redeploy. Get a free key at aistudio.google.com/apikey"
              : "Add GEMINI_API_KEY to .env (free key at aistudio.google.com/apikey), then run yarn start.",
          );
        }
      } catch {
        if (!cancelled) {
          setSetupError(
            process.env.NODE_ENV === "production"
              ? "Travel Assistant API is not responding. Redeploy the site after setting GEMINI_API_KEY (Netlify → Environment variables). If the key is already set, trigger Deploy → Clear cache and deploy site."
              : "Travel Assistant server is offline. Run yarn start (starts API + web).",
          );
        }
      }
    };

    void checkHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = useCallback(async (): Promise<void> => {
    const text = input.trim();
    if (!text || loading) {
      return;
    }

    const userMessage: TravelAssistantMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setInput("");
    setStreamError(null);
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setLoading(true);

    let assistantText = "";

    await streamTravelAssistantChat(
      nextMessages,
      (chunk) => {
        assistantText += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === "assistant") {
            updated[updated.length - 1] = {
              role: "assistant",
              content: assistantText,
            };
          }
          return updated;
        });
      },
      (errorMessage) => {
        setStreamError(errorMessage);
        setMessages((prev) => {
          if (
            prev.length > 0 &&
            prev[prev.length - 1]?.role === "assistant" &&
            prev[prev.length - 1]?.content === ""
          ) {
            return prev.slice(0, -1);
          }
          return prev;
        });
      },
    );

    setLoading(false);
  }, [input, loading, messages]);

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <>
      <StyledFab
        type="button"
        aria-label={open ? "Close travel assistant" : "Open travel assistant"}
        title={open ? undefined : TOOLTIPS.assistant.fab}
        onClick={() => setOpen((value) => !value)}
      >
        <FiMessageCircle />
      </StyledFab>

      {open ? (
        <StyledPanel role="dialog" aria-label="Travel Assistant">
          <StyledHeader>
            <h3>
              Travel Assistant
              <InfoTooltip
                content={TOOLTIPS.assistant.input}
                placement="bottom"
                variant="light"
                ariaLabel="About Travel Assistant"
              />
            </h3>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </StyledHeader>

          {setupError ? <StyledAlert>{setupError}</StyledAlert> : null}
          {streamError ? <StyledAlert>{streamError}</StyledAlert> : null}

          <StyledMessages>
            {messages.map((message, index) =>
              message.content ? (
                <StyledBubble key={`${message.role}-${index}`} $role={message.role}>
                  {message.content}
                </StyledBubble>
              ) : null,
            )}
            {loading ? (
              <StyledTyping aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </StyledTyping>
            ) : null}
            <div ref={messagesEndRef} />
          </StyledMessages>

          <StyledInputRow onSubmit={onSubmit}>
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              disabled={loading || Boolean(setupError)}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={loading || !input.trim() || Boolean(setupError)}
            >
              <FiSend />
            </button>
          </StyledInputRow>

          <StyledPoweredBy>
            Powered by Google Gemini ·{" "}
            <span className="assistant-brand-highlight">{BRAND_NAME}</span>
            <InfoTooltip
              content={TOOLTIPS.assistant.poweredBy}
              placement="top"
              ariaLabel="About AI responses"
            />
          </StyledPoweredBy>
        </StyledPanel>
      ) : null}
    </>
  );
};

export default TravelAssistant;

import { ReactNode, useEffect, useState } from "react";
import { CopilotKit, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import {
  BRAND_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  packagesTableUtils,
} from "@utils";
import {
  StyledCopilotErrorBanner,
  StyledCopilotSetupBanner,
} from "./style";

type CopilotRunErrorContext = {
  event?: { message?: string };
};

/** Map OpenAI / runtime errors to a short message for site visitors. */
const getFriendlyCopilotErrorMessage = (
  error: unknown,
  context?: unknown,
): string | null => {
  const chunks: string[] = [];

  if (error instanceof Error) {
    chunks.push(error.message);
  } else if (typeof error === "string") {
    chunks.push(error);
  }

  const runContext = context as CopilotRunErrorContext | undefined;
  if (runContext?.event?.message) {
    chunks.push(runContext.event.message);
  }

  const text = chunks.join(" ");

  if (text.includes("insufficient_quota")) {
    return "OpenAI credits or billing limit reached. Add payment or credits at platform.openai.com/account/billing, update OPENAI_API_KEY in .env if needed, then restart with yarn start.";
  }

  if (
    text.includes("invalid_api_key") ||
    text.includes("Incorrect API key")
  ) {
    return "The OpenAI API key in .env is invalid. Set a valid OPENAI_API_KEY and restart with yarn start.";
  }

  if (text.includes("rate_limit")) {
    return "OpenAI rate limit reached. Wait a minute and try again.";
  }

  return null;
};

/** Same-origin in dev (webpack proxy → port 4000). No cross-origin CORS issues. */
const COPILOT_RUNTIME_URL =
  process.env.REACT_APP_COPILOT_RUNTIME_URL ?? "/api/copilotkit";

/** Health check always via the app origin (webpack proxies to CopilotKit server). */
const COPILOT_HEALTH_URL = "/api/copilotkit/health";

const COPILOT_INSTRUCTIONS = `You are the travel copilot for ${BRAND_NAME}.
Help users explore tour packages, compare destinations, understand pricing, and plan trips.
Use the catalogue and contact context provided. Encourage booking via Book Now or Contact Us when appropriate.`;

type CopilotAssistantProps = {
  children: ReactNode;
};

const CopilotTravelContext = () => {
  useCopilotReadable({
    description: "Business and contact information",
    value: {
      brand: BRAND_NAME,
      phone: CONTACT_PHONE_DISPLAY,
      email: CONTACT_EMAIL,
      address: CONTACT_ADDRESS,
    },
  });

  useCopilotReadable({
    description: "Tour packages summary (full list on Packages page)",
    value: {
      totalPackages: packagesTableUtils.length,
      packages: packagesTableUtils.map((pkg) => ({
        id: pkg.id,
        title: pkg.title,
        location: pkg.location,
        duration: pkg.duration,
        priceInr: pkg.price,
        available: pkg.available,
      })),
    },
  });

  return null;
};

type CopilotHealthResponse = {
  openaiConfigured?: boolean;
};

const CopilotSetupBanner = () => {
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const checkRuntime = async (): Promise<void> => {
      try {
        const response = await fetch(COPILOT_HEALTH_URL);

        if (!response.ok) {
          if (!cancelled) {
            setBannerMessage(
              "Travel Assistant server is not reachable. Run yarn start and wait for the copilot process.",
            );
          }
          return;
        }

        const data = (await response.json()) as CopilotHealthResponse;

        if (!cancelled) {
          if (data.openaiConfigured) {
            setBannerMessage(null);
          } else {
            setBannerMessage(
              "Add a valid OPENAI_API_KEY to .env in the project root, then restart with yarn start.",
            );
          }
        }
      } catch {
        if (!cancelled) {
          setBannerMessage(
            "Cannot connect to Travel Assistant. Ensure yarn start is running (copilot + web).",
          );
        }
      }
    };

    void checkRuntime();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!bannerMessage) {
    return null;
  }

  return (
    <StyledCopilotSetupBanner role="alert">
      <strong>Travel Assistant setup</strong>
      <p>{bannerMessage}</p>
    </StyledCopilotSetupBanner>
  );
};

const CopilotAssistant = ({ children }: CopilotAssistantProps) => {
  const [runtimeError, setRuntimeError] = useState<string | null>(null);

  return (
  <CopilotKit
    runtimeUrl={COPILOT_RUNTIME_URL}
    useSingleEndpoint={false}
    agent="default"
    showDevConsole={false}
    onError={(event) => {
      console.error("[CopilotKit]", event.error, event.context);
      const friendly = getFriendlyCopilotErrorMessage(
        event.error,
        event.context,
      );
      if (friendly) {
        setRuntimeError(friendly);
      }
    }}
  >
    <CopilotTravelContext />
    <CopilotSetupBanner />
    {runtimeError ? (
      <StyledCopilotErrorBanner role="alert">
        <strong>Travel Assistant unavailable</strong>
        <p>{runtimeError}</p>
      </StyledCopilotErrorBanner>
    ) : null}
    {children}
    <CopilotPopup
      instructions={COPILOT_INSTRUCTIONS}
      labels={{
        title: "Travel Assistant",
        initial:
          "Hi! Ask me about tours, packages, or bookings across India.",
      }}
      defaultOpen={false}
    />
  </CopilotKit>
  );
};

export default CopilotAssistant;

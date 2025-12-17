import React, { useState, useEffect } from "react";
import styled from "styled-components";
const { FormattedMessage } = require("react-intl");
import messages from "@messages";

interface AccessControlProps {
  children: React.ReactNode;
}

const AccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: white;
  /* background: linear-gradient(135deg, #ee1aee 0%, #04dfb7 100%); */
  color: black;
  text-align: center;
`;

const AccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const AccessTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const AccessMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const AnimatedLoader = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid rgba(79, 189, 57, 0.2);
  border-top: 5px solid #4fbd39;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4fbd39;
  letter-spacing: 2px;

  &::after {
    content: "...";
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: ".";
    }
    40% {
      content: "..";
    }
    60%,
    100% {
      content: "...";
    }
  }
`;

const AccessControl: React.FC<AccessControlProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateAccess = async () => {
      try {
        // Get the access key from environment variables
        const accessKey = process.env["ACCESS_KEY"] || "";
        const expectedKey = "u34kkfe993943kkjerufj3343334hss";

        // Simulate a small delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (accessKey === expectedKey) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (_error) {
        // Access validation error
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateAccess();
  }, []);

  if (isLoading) {
    return (
      //  <AccessContainer>
      //   <LoadingSpinner />
      //   <AccessTitle>
      //     <FormattedMessage {...messages.VALIDATING_ACCESS} />
      //   </AccessTitle>
      //   <AccessMessage>
      //     <FormattedMessage {...messages.VALIDATING_ACCESS_MESSAGE} />
      //   </AccessMessage>
      // </AccessContainer>
      <AccessContainer>
        <LoaderContainer>
          <AnimatedLoader />
          <LoadingText>Loading</LoadingText>
        </LoaderContainer>
      </AccessContainer>
    );
  }

  if (!isAuthorized) {
    return (
      <AccessContainer>
        <AccessIcon>🚫</AccessIcon>
        <AccessTitle>
          <FormattedMessage {...messages.ACCESS_DENIED} />
        </AccessTitle>
        <AccessMessage>
          <FormattedMessage {...messages.ACCESS_DENIED_DESCRIPTION} />
        </AccessMessage>
      </AccessContainer>
    );
  }

  return <>{children}</>;
};

export default AccessControl;

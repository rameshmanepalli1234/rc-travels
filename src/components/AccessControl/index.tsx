import React, { useState, useEffect } from "react";
import styled from "styled-components";
const { FormattedMessage } = require("react-intl");
import messages from "@messages";
import AppLoader, { APP_LOADER_DURATION_MS } from "@components/AppLoader";

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
  margin-bottom: 1.5;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`;

const AccessInput = styled.input`
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin: 1rem 0;
  width: 300px;
  max-width: 90%;
  text-align: center;
  font-weight: 600;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4fbd39;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;

const AccessButton = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #4fbd39;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #45a832;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const AccessControl: React.FC<AccessControlProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    const validateAccess = async () => {
      try {
        // Get the access key from environment variables
        const accessKey = process.env["ACCESS_KEY"] || "";
        const expectedKey = "u34kkfe993943kkjerufj3343334hss";
        const fallbackKey = "4444";

        await new Promise((resolve) =>
          setTimeout(resolve, APP_LOADER_DURATION_MS),
        );

        if (accessKey === expectedKey || accessKey === fallbackKey) {
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

  const handleAccessCodeSubmit = () => {
    if (accessCode === "4444") {
      setIsAuthorized(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAccessCodeSubmit();
    }
  };

  if (isLoading) {
    return <AppLoader />;
  }

  // Access denied gate disabled: flow is loader → app. Restore by changing to `if (!isAuthorized)`.
  if (false && !isAuthorized) {
    return (
      <AccessContainer>
        <AccessIcon>🚫</AccessIcon>
        <AccessTitle>
          <FormattedMessage {...messages.ACCESS_DENIED} />
        </AccessTitle>
        <AccessMessage>
          <FormattedMessage {...messages.ACCESS_DENIED_DESCRIPTION} />
        </AccessMessage>
        <AccessInput
          type="text"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter access code"
        />
        <AccessButton onClick={handleAccessCodeSubmit}>Submit</AccessButton>
      </AccessContainer>
    );
  }

  return <>{children}</>;
};

export default AccessControl;

import React, { Component, ReactNode } from "react";
import styled from "styled-components";
const { FormattedMessage } = require("react-intl");
import messages from "@messages";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | null;
  isAccessDenied?: boolean;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`;

const RetryButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Error caught by boundary
  }

  handleRetry = () => {
    this.setState({ hasError: false, isAccessDenied: false });
    window.location.reload();
  };

  renderAccessDenied = () => (
    <ErrorContainer>
      <ErrorIcon>🚫</ErrorIcon>
      <ErrorTitle>
        <FormattedMessage {...messages.ACCESS_DENIED} />
      </ErrorTitle>
      <ErrorMessage>
        <FormattedMessage {...messages.ACCESS_DENIED_MESSAGE} />
      </ErrorMessage>
      <RetryButton onClick={this.handleRetry}>
        <FormattedMessage {...messages.RETRY_ACCESS} />
      </RetryButton>
    </ErrorContainer>
  );

  renderError = () => (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>
        <FormattedMessage {...messages.SOMETHING_WENT_WRONG} />
      </ErrorTitle>
      <ErrorMessage>
        {this.state.error && this.state.error.message ? (
          this.state.error.message
        ) : (
          <FormattedMessage {...messages.UNEXPECTED_ERROR} />
        )}
      </ErrorMessage>
      <RetryButton onClick={this.handleRetry}>
        <FormattedMessage {...messages.TRY_AGAIN} />
      </RetryButton>
    </ErrorContainer>
  );

  override render() {
    if (this.state.hasError) {
      return this.state.isAccessDenied
        ? this.renderAccessDenied()
        : this.renderError();
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

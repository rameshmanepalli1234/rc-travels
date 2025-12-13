import React, { Component, ReactNode } from 'react';
interface Props {
    children: ReactNode;
}
interface State {
    hasError: boolean;
    error?: Error | null;
    isAccessDenied?: boolean;
}
declare class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo): void;
    handleRetry: () => void;
    renderAccessDenied: () => import("react/jsx-runtime").JSX.Element;
    renderError: () => import("react/jsx-runtime").JSX.Element;
    render(): string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export default ErrorBoundary;
//# sourceMappingURL=index.d.ts.map
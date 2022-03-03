import React, { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}

export const withErrorBoundary = <T extends Record<string, any>>(WrappedComponent: React.FC<T>) => {
  class ErrorBoundary extends Component<T, State> {
    static displayName: string;

    public state: State = {
      hasError: false,
    };

    public static getDerivedStateFromError(): State {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
      if (this.state.hasError) {
        return <h1>Sorry.. there was an error</h1>;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  ErrorBoundary.displayName = `WithErrorBoundary(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ErrorBoundary;
};

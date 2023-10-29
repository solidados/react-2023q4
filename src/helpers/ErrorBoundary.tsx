import { Component, ErrorInfo, ReactElement, ReactNode } from 'react';
import { toast } from 'react-toastify';

interface Props {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  fallback: ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    toast.error(`Error: ${error.message}, ${info.componentStack}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;

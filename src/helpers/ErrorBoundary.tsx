import { Component } from 'react';
import { IErrorProps, IErrorState } from './types/types';

class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="error-boundary">
          <img
            src="https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg"
            alt="Oops!"
          />
          <h3
            style={{
              marginBottom: '20px',
            }}
          >
            Something went wrong...
          </h3>
          <button
            type="button"
            onClick={(): void => {
              this.setState({ hasError: false });
              // window.location.href = '/';
              window.location.reload();
            }}
            className="home-btn"
          >
            Return Home
          </button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

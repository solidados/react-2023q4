import { Component, MouseEvent } from 'react';

interface IErrButton {
  onErrorClick: (event?: MouseEvent) => void;
}

class ErrorButton extends Component<IErrButton> {
  render() {
    const { onErrorClick } = this.props;
    return (
      <button type="button" onClick={onErrorClick} className="error-btn">
        e!
      </button>
    );
  }
}

export default ErrorButton;

import { Component } from 'react';
import SearchBar from './SearchBar';
import { IData, IErrorState } from '../helpers/types/types';
import ErrorButton from './ErrorButton';

class Header extends Component<
  { onDataChange: (data: IData[]) => void },
  IErrorState
> {
  constructor(
    props:
      | { onDataChange: (data: IData[]) => void }
      | Readonly<{ onDataChange: (data: IData[]) => void }>
  ) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleErrorButtonClick = this.handleErrorButtonClick.bind(this);
  }

  public componentDidUpdate() {
    const { hasError } = this.state;
    if (hasError) {
      throw new Error('ERROR!');
    }
  }

  handleDataChange = (data: IData[]) => {
    const { onDataChange } = this.props;
    onDataChange(data);
  };

  handleErrorButtonClick() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <SearchBar onDataChange={this.handleDataChange} />
          <ErrorButton onErrorClick={this.handleErrorButtonClick} />
        </div>
      </header>
    );
  }
}

export default Header;

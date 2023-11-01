import { Component } from 'react';
import SearchBar from './SearchBar';
import { IData } from '../helpers/types/types';

class Header extends Component<{ onDataChange: (data: IData[]) => void }> {
  handleDataChange = (data: IData[]) => {
    const { onDataChange } = this.props;
    onDataChange(data);
  };

  render() {
    const handleErrorButtonClick = (): string => {
      throw new Error('ERROR');
    };
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <SearchBar onDataChange={this.handleDataChange} />
          <button
            type="button"
            className="error-btn"
            onClick={handleErrorButtonClick}
          >
            e!
          </button>
        </div>
      </header>
    );
  }
}

export default Header;

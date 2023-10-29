import { Component } from 'react';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    const handleErrorButtonClick = (): string => {
      throw new Error('ERROR');
    };
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <SearchBar />
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

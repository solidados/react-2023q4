import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <input
            type="text"
            id="search"
            placeholder="Search.."
            className="search"
          />
          <button type="button" className="search-btn">
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default Header;

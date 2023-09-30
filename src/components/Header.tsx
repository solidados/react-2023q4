import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <input className="header-search-input" />
          <button type="button" className="header-search-button">
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default Header;

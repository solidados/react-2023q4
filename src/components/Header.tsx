import { Component } from 'react';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <SearchBar />
        </div>
      </header>
    );
  }
}

export default Header;

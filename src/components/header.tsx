import { Component } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1>Movies</h1>
          <SearchBar />
          <SearchButton />
        </div>
      </header>
    );
  }
}

export default Header;

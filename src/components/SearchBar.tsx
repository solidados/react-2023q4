import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="search"
          placeholder="Search.."
          className="search"
        />
      </div>
    );
  }
}

export default SearchBar;

import { ChangeEvent, Component } from 'react';
import { ISearchState } from '../helpers/types/types';

class SearchBar extends Component<Record<string, never>, ISearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchInput: event.target.value });
  };

  handleButtonClick = (): void => {
    const { searchInput } = this.state;
    localStorage.setItem('searchResult', searchInput);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search.."
          className="search"
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          className="search-btn"
          onClick={this.handleButtonClick}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;

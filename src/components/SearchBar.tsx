import { ChangeEvent, useEffect, useState } from 'react';

export interface ISearchProps {
  onDataChange: (searchInput: string) => void;
}

function SearchBar({ onDataChange }: ISearchProps) {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const lastSearchResult = localStorage.getItem('searchResult');
    setSearchInput(lastSearchResult || '');
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  const handleButtonClick = (): void => {
    localStorage.setItem('searchResult', searchInput);
    onDataChange(searchInput);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="Search.."
        className="search"
        onChange={handleInputChange}
        value={searchInput}
      />
      <button type="button" className="search-btn" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

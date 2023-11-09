import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  const handleButtonClick = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    localStorage.setItem('searchResult', searchInput);
    searchParams.set('search', searchInput);
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const lastSearchResult = localStorage.getItem('searchResult');
    if (lastSearchResult) {
      setSearchInput(lastSearchResult);
    }
  }, []);

  return (
    <form className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="Search.."
        className="search"
        onChange={handleInputChange}
        value={searchInput}
      />
      <button type="submit" className="search-btn" onClick={handleButtonClick}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;

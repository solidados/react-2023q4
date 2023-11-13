import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ErrorButton from './ErrorButton';

function Header() {
  const [hasError, setHasError] = useState(false);

  useEffect((): void => {
    if (hasError) {
      throw new Error('ERROR!');
    }
  }, [hasError]);

  const handleErrorButtonClick = (): void => {
    setHasError(true);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>Movies</h1>
        <SearchBar />
        <ErrorButton onErrorClick={handleErrorButtonClick} />
      </div>
    </header>
  );
}

export default Header;

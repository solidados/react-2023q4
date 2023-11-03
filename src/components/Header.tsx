import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ErrorButton from './ErrorButton';

interface IHeaderProps {
  onDataChange: (searchInput: string) => void;
}

function Header({ onDataChange }: IHeaderProps) {
  const [hasError, setHasError] = useState(false);

  useEffect((): void => {
    if (hasError) {
      throw new Error('ERROR!');
    }
  }, [hasError]);

  const handleDataChange = (searchInput: string): void => {
    onDataChange(searchInput);
  };

  const handleErrorButtonClick = (): void => {
    setHasError(true);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>Movies</h1>
        <SearchBar onDataChange={handleDataChange} />
        <ErrorButton onErrorClick={handleErrorButtonClick} />
      </div>
    </header>
  );
}

export default Header;

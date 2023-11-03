import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

function Home() {
  const [searchInput, setSearchInput] = useState('');

  useEffect((): void => {
    const lastSearchResult = localStorage.getItem('searchResult');
    setSearchInput(lastSearchResult || 'star');
  }, []);

  return (
    <>
      <Header onDataChange={setSearchInput} />
      <MainSection searchInput={searchInput} />
    </>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

import fetchData from '../helpers/api/api';
import { IData } from '../helpers/types/types';

import './card.css';
import Loader from './Loader';

function CardList() {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const getData = async (value?: string | undefined) => {
    setIsLoading(true);
    try {
      const responseData = await fetchData(value);
      setData(responseData.Search);
    } catch (error) {
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((): void => {
    const searchResult = localStorage.getItem('searchResult');

    if (searchResult) {
      getData(searchResult).catch((error: Error) => console.error(error));
    }
  }, [location.search]);

  useEffect((): void => {
    if (localStorage.getItem('searchResult')) return;
    getData().catch((error: Error) => console.error(error));
  }, []);

  if (!data || data.length === 0) {
    return <p>Oops! Nothing is found...</p>;
  }

  const content = data.map((item: IData) => (
    <Card item={item} key={item.imdbID} />
  ));

  return (
    <div className="cards">
      {content}
      {isLoading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default CardList;

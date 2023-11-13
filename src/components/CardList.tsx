import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Card from './Card';

import fetchData from '../helpers/api/api';
import { IData } from '../helpers/types/types';

import './card.css';
import Loader from './Loader';

function CardList() {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const location = useLocation();

  const getData = (value?: string | undefined, page?: number): void => {
    setIsLoading(true);
    fetchData(value, page)
      .then((responseData) => setData(responseData.Search))
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect((): void => {
    const searchResult = localStorage.getItem('searchResult');
    const page = searchParams.get('page') || '1';
    console.log('Current Page: ', page);
    if (searchResult) {
      console.log('Search: ', searchResult);
      getData(searchResult, Number(page));
    } else {
      getData('star', Number(page));
    }
  }, [location.search, searchParams]);

  useEffect((): void => {
    if (localStorage.getItem('searchResult')) return;
    getData();
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

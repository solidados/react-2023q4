import { useEffect, useState } from 'react';
import { IData } from '../types/types';
import Constants from '../constants/Constants';

const useFetch = (apiUrl: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(Constants.fetchError);
        }
        return response.json();
      })
      .then((dataDB): void => {
        setData(dataDB);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [apiUrl]);

  return { data, isLoading, error };
};

export default useFetch;

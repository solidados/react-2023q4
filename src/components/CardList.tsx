import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Card from './Card';
import 'react-toastify/dist/ReactToastify.css';
import './card.css';
import fetchData from '../helpers/api/api';
import { IApiResponse, IData } from '../helpers/types/types';
import NotFound from '../pages/NotFound';

interface ICardListProps {
  searchInput: string;
  pageNumber: number;
}

function CardList({ searchInput, pageNumber }: ICardListProps) {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect((): void => {
    const searchMovie = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response: IApiResponse = await new Promise<IApiResponse>(
          (resolve): void => {
            setTimeout(async (): Promise<void> => {
              const responseData: IApiResponse = await fetchData(
                searchInput,
                pageNumber
              );
              resolve(responseData);
            }, 2000);
          }
        );
        setData(response.Search);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovie().catch((error) => toast(`Error: ${error.message}`));
  }, [searchInput, pageNumber]);

  if (!data || data.length === 0) {
    return <p>Oops! Nothing is found...</p>;
  }

  if (hasError) return <NotFound />;

  const content = data.map((item: IData) => (
    <Card item={item} key={item.imdbID} />
  ));

  return (
    <div className="cards">
      {content}
      {isLoading && (
        <div className="loader-wrapper">
          <Oval
            wrapperClass=""
            visible
            ariaLabel="oval-loading"
            wrapperStyle={{
              position: 'relative',
              top: '30%',
              left: '50%',
            }}
            height={60}
            width={60}
            color="#08428CD1"
            secondaryColor="#CCE0FFFF"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </div>
  );
}

export default CardList;

import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Card from './Card';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';
import fetchData from '../helpers/api/api';
import { IApiResponse, IData } from '../helpers/types/types';

interface ICardListProps {
  searchInput: string;
}

function CardList({ searchInput }: ICardListProps) {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): void => {
    const searchMovie = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response: IApiResponse = await new Promise<IApiResponse>(
          (resolve): void => {
            setTimeout(async (): Promise<void> => {
              const responseData: IApiResponse = await fetchData(searchInput);
              resolve(responseData);
            }, 2000);
          }
        );
        // const response: IApiResponse = await fetchData(searchInput);
        setData(response.Search);
      } catch (error) {
        if (error instanceof Error) {
          toast(`Error: ${error.message}`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      } finally {
        setIsLoading(false);
      }
    };
    searchMovie().catch((error) => toast(`Error: ${error.message}`));
  }, [searchInput]);

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

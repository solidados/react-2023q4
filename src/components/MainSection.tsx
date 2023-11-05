import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardList from './CardList';
import fetchData from '../helpers/api/api';
import { IApiResponse, IData } from '../helpers/types/types';
import NotFound from '../pages/NotFound';
import Pagination from './Pagination';

interface IMainSectionProps {
  searchInput: string;
}

function MainSection({ searchInput }: IMainSectionProps) {
  const [data, setData] = useState<IData[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect((): void => {
    const pageChange = async (): Promise<void> => {
      // setIsLoading(true);
      try {
        const response: IApiResponse = await fetchData(searchInput, pageNumber);
        setData(response.Search);
        setTotalPages(Math.ceil(response.totalResults / 10));
      } catch (error) {
        setHasError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    pageChange().catch((error) => toast(`Error: ${error.message}`));
  }, [searchInput, pageNumber]);

  const handlePageChange = (newPage: number): void => {
    setPageNumber(newPage);
    sessionStorage.setItem('pageNumber', newPage.toString());
  };

  if (!data || data.length === 0) {
    return <p>Oops! Nothing is found...</p>;
  }

  if (hasError) return <NotFound />;

  return (
    <main className="main" role="main">
      <div className="main-container">
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <CardList searchInput={searchInput} pageNumber={pageNumber} />
      </div>
    </main>
  );
}

export default MainSection;

import './pagination.css';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// interface IPaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (newPage: number) => void;
// }

// {
//   currentPage,
//     totalPages,
//     onPageChange,
// }: IPaginationProps

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number): void => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      searchParams.set('page', pageNumber.toString());
      navigate(`?${searchParams.toString()}`);
      setCurrentPage(pageNumber);
    }
  };

  // useEffect(() => {
  //   const page = searchParams.get('page');
  // }, [searchParams]);

  return (
    <div className="pagination">
      <div className="pagination-container">
        <p>{/* Found on <span>{totalPages}</span> pages */}</p>
        <div className="pagination-bar">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            prev
          </button>
          <input value={currentPage} />
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

import './pagination.css';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="pagination">
      <div className="pagination-container">
        <p>
          Total pages: <span>{totalPages}</span>
        </p>
        <div className="pagination-bar">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            prev
          </button>
          <input
            type="text"
            value={currentPage}
            onChange={(event) =>
              handlePageChange(parseInt(event.target.value, 10) || 1)
            }
          />
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

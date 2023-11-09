import CardList from './CardList';
import Pagination from './Pagination';

function MainSection() {
  return (
    <main className="main" role="main">
      <div className="main-container">
        <Pagination
        // currentPage={Number(searchParams.get('page')) || 1}
        // totalPages={Math.ceil(data.length / 10)}
        // onPageChange={handlePageChange}
        />
        <CardList />
      </div>
    </main>
  );
}

export default MainSection;

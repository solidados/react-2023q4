import CardList from './CardList';

function MainSection() {
  return (
    <main className="main" role="main">
      <div className="main-container">
        {/* <Pagination */}
        {/*  currentPage={Number(searchParams.get('page')) || 1} */}
        {/*  totalPages={Math.ceil(data.length / 10)} */}
        {/*  onPageChange={handlePageChange} */}
        {/* /> */}

        {/* <CardList */}
        {/*  searchInput={searchInput} */}
        {/*  pageNumber={Number(searchParams.get('page')) || 1} */}
        {/* /> */}
        <CardList />
      </div>
    </main>
  );
}

export default MainSection;

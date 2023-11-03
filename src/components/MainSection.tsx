import CardList from './CardList';

interface IMainSectionProps {
  searchInput: string;
}

function MainSection({ searchInput }: IMainSectionProps) {
  return (
    <main className="main" role="main">
      <div className="main-container">
        <CardList searchInput={searchInput} />
      </div>
    </main>
  );
}

export default MainSection;

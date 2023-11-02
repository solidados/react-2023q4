import 'react-toastify/dist/ReactToastify.css';
import './Card.css';
import Card from './Card';
import { IData } from '../helpers/types/types';

function CardList({
  data,
}: {
  data: IData[];
  // onDataChange: (data: IData[]) => void;
}) {
  if (!data || data.length === 0) {
    return <p>Oops! Nothing is found...</p>;
  }
  const content = data.map((item) => <Card item={item} key={item.imdbID} />);

  return <div className="cards">{content}</div>;
}

export default CardList;

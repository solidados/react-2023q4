import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';
import Card from './Card';
import { IData } from '../helpers/types/types';

class CardList extends Component<{
  data: IData[];
  onDataChange: (data: IData[]) => void;
}> {
  render() {
    const { data } = this.props;

    if (!data || data.length === 0) {
      return <p>Loading data...</p>;
    }
    const content = data.map((item) => <Card item={item} key={item.imdbID} />);

    return <div className="cards">{content}</div>;
  }
}

export default CardList;

import { Component } from 'react';
import CardList from './CardList';
import { IData } from '../helpers/types/types';

class MainSection extends Component<{
  data: IData[];
  onDataChange: (data: IData[]) => void;
}> {
  render() {
    const { data, onDataChange } = this.props;
    return (
      <main className="main" role="main">
        <div className="main-container">
          <CardList data={data} onDataChange={onDataChange} />
        </div>
      </main>
    );
  }
}

export default MainSection;

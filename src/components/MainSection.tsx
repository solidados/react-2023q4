import { Component } from 'react';
import CardList from './CardList';

class MainSection extends Component {
  render() {
    return (
      <main className="main" role="main">
        <div className="main-container">
          <CardList />
        </div>
      </main>
    );
  }
}

export default MainSection;

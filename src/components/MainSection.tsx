import { Component } from 'react';
import Card from './Card';

class MainSection extends Component {
  render() {
    return (
      <main className="main" role="main">
        <div className="main-container">
          <Card />
        </div>
      </main>
    );
  }
}

export default MainSection;

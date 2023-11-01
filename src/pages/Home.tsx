import { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { IData } from '../helpers/types/types';

export interface IHomeState {
  data: IData[];
}

class Home extends Component<Record<string, never>, IHomeState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleDataChange = (data: IData[]) => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Header onDataChange={this.handleDataChange} />
        <MainSection data={data} onDataChange={this.handleDataChange} />
      </>
    );
  }
}

export default Home;

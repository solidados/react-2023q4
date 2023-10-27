import { Component } from 'react';
import ApiRequest, { IApiResponse } from '../api/api';
import './Card.css';

interface IState {
  data: IApiResponse | null;
}

class Card extends Component<NonNullable<unknown>, IState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      data: null,
    };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const data = await ApiRequest.fetchData();
      this.setState({ data });
    } catch (err) {
      console.error('Error:', err);
    }
  }

  render() {
    const { data } = this.state;
    const content =
      data &&
      data.Search.map((item) => (
        <div className="card-item" key={item.imdbID}>
          <img src={item.Poster} alt="poster" className="card-img" />
          <div className="card-description">
            <h3 className="card-title">
              <span>Title:</span> {item.Title}
            </h3>
            <p>
              <span>Year:</span> {item.Year}
            </p>
            <p>
              <span>Type:</span> {item.Type}
            </p>
          </div>
        </div>
      ));
    return <div className="cards">{content}</div>;
  }
}

export default Card;

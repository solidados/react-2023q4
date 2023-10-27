import { Component } from 'react';
import ApiRequest from '../api/api';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  public componentDidMount() {
    ApiRequest.fetchData()
      .then((data) => this.setState({ data }))
      .catch((err) => console.error('Error:', err));
  }

  render() {
    const { data } = this.state;
    const content =
      data &&
      data.Search.map((item) => (
        <div className="card-item" key={item.imdbID}>
          <img src={item.Poster} alt="poster" className="card-img" />
          <h2 className="card-title">{item.Title}</h2>
          <div className="card-description">
            <p>Year: {item.Year}</p>
            <p>Type: {item.Type}</p>
          </div>
        </div>
      ));
    return <div className="card">{content}</div>;
  }
}

export default Card;

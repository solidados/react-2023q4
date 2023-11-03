import { IData } from '../helpers/types/types';

function Card(props: { item: IData }) {
  const { item } = props;
  return (
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
  );
}

export default Card;

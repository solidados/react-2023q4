import { IData } from '../helpers/types/types';

export default function Card({ item }: { item: IData }) {
  return (
    <div className="card-item" key={item.imdbID}>
      <img src={item.Poster} alt="poster" className="card-img" />
      <div className="card-description">
        <h3 className="card-title">Title: {item.Title}</h3>
        <p>Year: {item.Year}</p>
        <p>Type: {item.Type}</p>
      </div>
    </div>
  );
}

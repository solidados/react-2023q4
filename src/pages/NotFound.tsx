import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">The Page you are looking is not found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;

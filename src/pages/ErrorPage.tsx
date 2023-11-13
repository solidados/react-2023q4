import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">The Page you are looking is not found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default ErrorPage;

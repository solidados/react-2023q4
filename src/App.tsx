import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './helpers/ErrorBoundary';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <ErrorBoundary
        fallback={
          <div className="error-boundary">
            <p>Something went wrong</p>
            <Link to="/">return to Home Page</Link>
          </div>
        }
      >
        <App />
        <ToastContainer />
      </ErrorBoundary>
    </HashRouter>
  );
}

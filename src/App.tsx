import { HashRouter, Route, Routes } from 'react-router-dom';
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
      <ErrorBoundary>
        <App />
        <ToastContainer />
      </ErrorBoundary>
    </HashRouter>
  );
}

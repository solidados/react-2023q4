import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', (): void => {
  it('Renders main page', (): void => {
    render(<WrappedApp />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('Renders NotFound page if invalid path', (): void => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByText('The Page you are looking is not found')
    ).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

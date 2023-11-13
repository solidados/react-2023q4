import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { IData } from '../helpers/types/types';

describe('Card', () => {
  it('should render without crashing', () => {
    const item: IData = {
      imdbID: '1',
      Poster: 'https://example.com/poster.jpg',
      Title: 'Test Movie',
      Year: '2023',
      Type: 'movie',
    };
    render(<Card item={item} />);
  });
  it('should display the correct title, year, and type', () => {
    const item: IData = {
      imdbID: '1',
      Poster: 'https://example.com/poster.jpg',
      Title: 'Test Movie',
      Year: '2023',
      Type: 'movie',
    };
    render(<Card item={item} />);
    expect(
      screen.getByRole('heading', { name: /Title: Test Movie/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Year:\s*2023/i)).toBeInTheDocument();
    expect(screen.getByText(/Type:\s*movie/i)).toBeInTheDocument();
  });
});

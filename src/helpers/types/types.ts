import { ReactElement, ReactNode } from 'react';

export interface IApiResponse {
  Search: IData[];
}

export interface IData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

export interface IErrorProps {
  children?: ReactNode;
  fallback: ReactElement;
}

export interface IState {
  data: IApiResponse | null;
  searchTerm: string | null;
}

export interface ISearchState {
  searchInput: string;
}

export interface IErrorState {
  hasError: boolean;
}

import { ReactElement, ReactNode } from 'react';

export type IApiResponse = {
  Search: IData[];
  totalResults: number;
  Response: boolean;
};

export type IData = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
};

export interface IErrorProps {
  children?: ReactNode;
  fallback?: ReactElement;
}

export interface IErrorState {
  hasError: boolean;
}

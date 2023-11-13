import { IApiResponse } from '../types/types';
import Constants from '../constants/Constants';

async function fetchData(
  title: string = 'star',
  pageNumber: number = 1
): Promise<IApiResponse> {
  const response = await fetch(
    `${Constants.API_URL}&s=${title}&page=${pageNumber}`
  );
  return response.json();
}

export default fetchData;

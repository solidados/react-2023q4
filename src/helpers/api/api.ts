import { IApiResponse } from '../types/types';

const URL: string = 'https://www.omdbapi.com/?apikey=';
const API_KEY: string = '90edd0f9';

async function fetchData(title: string): Promise<IApiResponse> {
  const response = await fetch(`${URL}${API_KEY}&s=${title}&page=1`);
  return response.json();
}

export default fetchData;

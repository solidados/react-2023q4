export interface IData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

export interface IApiResponse {
  Search: IData[];
}

export class ApiRequest {
  private static defaultSearch: string =
    localStorage.getItem('searchResult') || 'star';

  private static URL: string = 'https://www.omdbapi.com/';

  private static API_KEY: string = '90edd0f9';

  static fetchData = async (): Promise<IApiResponse> => {
    const response = await fetch(
      `${this.URL}?apikey=${this.API_KEY}&s=${this.defaultSearch}`
    );
    return response.json();
  };
}

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
  private static URL: string = 'https://www.omdbapi.com/?apikey=';

  private static API_KEY: string = '90edd0f9';

  private static get defaultSearch() {
    return localStorage.getItem('searchResult') || 'star';
  }

  static fetchData = async (
    title: string = this.defaultSearch
  ): Promise<IApiResponse> => {
    const response = await fetch(
      `${this.URL}${this.API_KEY}&s=${title}&page=1`
    );
    return response.json();
  };
}

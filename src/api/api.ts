interface IData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

interface IApiResponse {
  Search: IData[];
}

class ApiRequest {
  private static defaultSearch: string =
    localStorage.getItem('searchResult') || 'star';

  private static URL: string = 'https://www.omdbapi.com/';

  private static API_KEY: string = '90edd0f9';

  static fetchData = async (): Promise<IApiResponse> => {
    const response = await fetch(
      `${this.URL}?apikey=${this.API_KEY}&s=${this.defaultSearch}`
    );
    const data: IApiResponse = response.json();
    return data;
  };
}

export default ApiRequest;

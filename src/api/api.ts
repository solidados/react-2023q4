class ApiRequest {
  static defaultSearch: string = localStorage.getItem('searchResult') || 'star';

  static URL: string = 'https://www.omdbapi.com/';

  static API_KEY: string = '90edd0f9';

  static fetchData = () => {
    return fetch(
      `${this.URL}?apikey=${this.API_KEY}&s=${this.defaultSearch}`
    ).then((response) => response.json());
  };
}

export default ApiRequest;

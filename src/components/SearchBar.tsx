import { ChangeEvent, Component } from 'react';
import { toast } from 'react-toastify';
import ApiRequest from '../helpers/api/api';
import { IApiResponse, IData } from '../helpers/types/types';

export interface ISearchState {
  searchInput: string;
  data: IData[];
  isLoading: boolean;
}

class SearchBar extends Component<
  { onDataChange: (data: IData[]) => void },
  ISearchState
> {
  constructor(props: { onDataChange: (data: IData[]) => void }) {
    super(props);
    this.state = {
      searchInput: localStorage.getItem('searchResult') || '',
      // eslint-disable-next-line react/no-unused-state
      data: [],
      isLoading: false,
    };
  }

  public async componentDidMount() {
    const { searchInput } = this.state;
    this.setState({ isLoading: true });
    await this.searchMovie(searchInput);
    this.setState({ isLoading: false });
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchInput: event.target.value });
  };

  handleButtonClick = async () => {
    const { searchInput } = this.state;
    localStorage.setItem('searchResult', searchInput);
    await this.searchMovie(searchInput);
  };

  searchMovie = async (title: string) => {
    this.setState({ isLoading: true });
    try {
      const response = await new Promise<IApiResponse>((resolve) => {
        setTimeout(async () => {
          const data = await ApiRequest.fetchData(title);
          resolve(data);
        }, 2000);
      });
      const { onDataChange } = this.props;
      // eslint-disable-next-line react/no-unused-state
      this.setState({ data: response.Search });
      onDataChange(response.Search);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } finally {
      this.setState({ isLoading: false }); // добавьте это
    }
  };

  render() {
    const { searchInput, isLoading } = this.state;
    return (
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search.."
          className="search"
          onChange={this.handleInputChange}
          value={searchInput}
        />
        <button
          type="button"
          className="search-btn"
          onClick={this.handleButtonClick}
        >
          Search
        </button>
        {isLoading && <div>Loading...</div>}
      </div>
    );
  }
}

export default SearchBar;

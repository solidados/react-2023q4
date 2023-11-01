import { ChangeEvent, Component } from 'react';
import { toast } from 'react-toastify';
import ApiRequest from '../helpers/api/api';
import { IData } from '../helpers/types/types';

export interface ISearchState {
  searchInput: string;
  data: IData[];
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
    };
  }

  public async componentDidMount() {
    const { searchInput } = this.state;
    await this.searchMovie(searchInput);
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
    try {
      const response = await ApiRequest.fetchData(title);
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
    }
  };

  render() {
    const { searchInput } = this.state;
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
      </div>
    );
  }
}

export default SearchBar;

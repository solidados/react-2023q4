import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiRequest, IApiResponse } from '../helpers/api/api';
import './Card.css';
import Card from './Card';

interface IState {
  data: IApiResponse | null;
  searchTerm: string | null;
}

class CardList extends Component<NonNullable<unknown>, IState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      data: null,
      searchTerm: '',
    };
  }

  public async componentDidMount(): Promise<void> {
    this.setState({ searchTerm: localStorage.getItem('searchResult') });
    await this.searchMovie();
  }

  public async componentDidUpdate(
    _prevProps: Readonly<NonNullable<unknown>>,
    prevState: Readonly<IState>
  ) {
    const { searchTerm } = this.state;
    if (prevState.searchTerm !== searchTerm) {
      await this.searchMovie();
    }
  }

  searchMovie = async () => {
    try {
      const data = await ApiRequest.fetchData();
      this.setState({ data });
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
    const { data } = this.state;
    const content =
      data && data.Search.map((item) => <Card item={item} key={item.imdbID} />);
    return <div className="cards">{content}</div>;
  }
}

export default CardList;

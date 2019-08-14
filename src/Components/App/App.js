import React, { Component } from 'react';
import axios from 'axios';
import SeacrhForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import './App.module.css';

class App extends Component {
  state = {
    photoCards: [],
    querry: 'cats',
    perPage: 12,
  };

  componentDidMount() {
    const { querry, perPage } = this.state;
    this.fetchPhoto(querry, perPage);
  }

  componentDidUpdate(prevProps, prevState) {
    const { photoCards, querry, perPage } = this.state;

    if (prevState.perPage !== perPage) {
      this.fetchPhoto(querry, perPage);
    }
    if (perPage === 12) {
      photoCards.length = 12;
    }
    if (photoCards.length > 12) {
      window.scrollTo({
        top: document.body.scrollHeight - 1430,
        behavior: 'smooth',
      });
    }
  }

  fetchPhoto = (querry, perPage) => {
    axios(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${querry}&page=1&per_page=${perPage}&key=13203870-f88321e1576e2ee35198d8add`,
    ).then(({ data }) => this.setState({ photoCards: data.hits }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ perPage: 12 });
    const { querry } = this.state;
    const { perPage } = this.state;
    this.fetchPhoto(querry, perPage);
  };

  handleInputChange = e => {
    this.setState({ querry: e.target.value });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      perPage: prevState.perPage + 12,
    }));
  };

  render() {
    const { photoCards } = this.state;
    return (
      <>
        <SeacrhForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
        <Gallery photoMass={photoCards} onLoadMore={this.handleLoadMore} />
      </>
    );
  }
}

export default App;

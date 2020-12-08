import React, { Component } from "react";
import Loader from "react-loader-spinner";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

import fetchImages from "../../services/imageApi";
import imageDataMapper from "../../utils/imageDataMapper";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.module.css";

class App extends Component {
  state = { query: "", images: [], isLoading: false, openModal: false };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchImages()
      .then(data => imageDataMapper(data))
      .then(mappedData =>
        this.setState({
          images: mappedData,
          isLoading: false,
        }),
      )
      .catch(err => {
        throw new Error(err);
      });
  }

  handleSearchQuery = e => {
    this.setState({ query: e.target.value });
  };

  handleSearchSubmit = () => {
    const { query } = this.state;
    this.setState({ isLoading: true });

    fetchImages(query)
      .then(data => imageDataMapper(data))
      .then(mappedData => {
        return this.setState({
          images: mappedData,
          isLoading: false,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { query, images, isLoading, openModal } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.handleSearchSubmit}
          onChange={this.handleSearchQuery}
          value={query}
        />
        <ImageGallery images={images} />
        {images.length > 0 && <Button />}
        <Loader
          type="ThreeDots"
          color="#3f51b5"
          height={40}
          width={60}
          visible={isLoading}
        />
        {openModal && <Modal />}
      </div>
    );
  }
}

export default App;

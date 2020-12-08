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
  state = {
    query: "",
    page: 1,
    images: [],
    selectedImage: "",
    isLoading: false,
    openModal: false,
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleSearchQuery = e => {
    this.setState({ query: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.handleFetch();
  };

  handleFetch = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    fetchImages(query.length === 0 ? "cat" : query, page)
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

  handleModalImageSelection = id => {
    const { images } = this.state;
    const selectedImage = images.filter(img => img.id === id)[0];
    this.setState({
      selectedImage: selectedImage.largeImageURL,
      openModal: true,
    });
  };

  handleModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  render() {
    const { query, images, selectedImage, isLoading, openModal } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.handleSearchSubmit}
          onChange={this.handleSearchQuery}
          value={query}
        />
        <ImageGallery
          images={images}
          onModalImgSelect={this.handleModalImageSelection}
        />
        {images.length > 0 && <Button />}
        <Loader
          type="ThreeDots"
          color="#3f51b5"
          height={40}
          width={60}
          visible={isLoading}
        />
        {openModal && (
          <Modal img={selectedImage} onModalClose={this.handleModal} />
        )}
      </div>
    );
  }
}

export default App;

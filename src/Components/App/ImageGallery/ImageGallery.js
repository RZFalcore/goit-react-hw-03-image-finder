import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModalImgSelect }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        onOpenModal={() => onModalImgSelect(id)}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onModalImgSelect: PropTypes.func.isRequired,
};

export default ImageGallery;

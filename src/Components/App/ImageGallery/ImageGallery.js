import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(img => (
      <ImageGalleryItem key={img.id} url={img.webformatURL} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;

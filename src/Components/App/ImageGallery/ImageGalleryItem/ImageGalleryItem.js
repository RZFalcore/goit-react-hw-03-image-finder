import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url }) => (
  <li className={styles.ImageGalleryItem}>
    <img src={url} alt="" className={styles.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

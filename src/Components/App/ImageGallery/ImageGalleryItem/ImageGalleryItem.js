/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, onOpenModal }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={onOpenModal}
    onKeyPress={onOpenModal}
    role="button"
    tabIndex={0}
  >
    <img src={url} alt="" className={styles.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

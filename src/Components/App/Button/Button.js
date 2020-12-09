import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ onLoadMoreImgs }) => (
  <button className={styles.Button} type="button" onClick={onLoadMoreImgs}>
    Load more
  </button>
);
Button.propTypes = {
  onLoadMoreImgs: PropTypes.func.isRequired,
};
export default Button;

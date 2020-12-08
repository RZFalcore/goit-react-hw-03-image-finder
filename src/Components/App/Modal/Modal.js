/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

export default class Modal extends PureComponent {
  overlayRef = createRef();

  static propTypes = {
    img: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscapePress);
  }

  handleEscapePress = e => {
    if (e.key !== "Escape") return;
    this.props.onModalClose();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;
    if (current && e.target !== current) return;
    this.props.onModalClose();
  };

  render() {
    const { img } = this.props;

    return (
      <div
        className={styles.Overlay}
        role="button"
        tabIndex={0}
        onClick={this.handleOverlayClick}
      >
        <div className={styles.Modal}>
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

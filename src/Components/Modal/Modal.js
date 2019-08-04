/* eslint-disable */
import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.code !== 'Escape') return;
    this.props.onClose();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;

    if (current && e.target !== current) return;

    this.props.onClose();
  };

  render() {
    const { img } = this.props;
    return (
      <div
        className={styles.overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
      >
        <div className={styles.modal}>
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

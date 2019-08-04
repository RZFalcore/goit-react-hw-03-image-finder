import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

class PhotoCard extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  };

  state = {
    openModal: false,
  };

  handleModalOpening = () => {
    this.setState({ openModal: true });
  };

  handleModalClosing = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;
    const {
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
    } = this.props;

    return (
      <div className={styles.photoCard}>
        <img src={webformatURL} alt="" />

        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={this.handleModalOpening}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {openModal && (
          <Modal img={largeImageURL} onClose={this.handleModalClosing} />
        )}
      </div>
    );
  }
}

export default PhotoCard;

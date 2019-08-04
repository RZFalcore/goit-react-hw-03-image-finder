import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ photoCards, onLoadMore }) => (
  <div>
    {photoCards.length === 0 && (
      <p className={styles.error}>Sorry, didnt find anything!!</p>
    )}
    <ul className={styles.gallery}>
      {photoCards.map(card => (
        <li key={card.id}>
          <PhotoCard {...card} />
        </li>
      ))}
    </ul>
    <button type="button" className={styles.load} onClick={onLoadMore}>
      Load more
    </button>
  </div>
);

Gallery.propTypes = {
  photoCards: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default Gallery;

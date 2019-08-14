import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ photoMass, onLoadMore }) => (
  <div>
    {photoMass.length === 0 && (
      <p className={styles.error}>Sorry, didnt find anything!!</p>
    )}
    <ul className={styles.gallery}>
      {photoMass.map(card => (
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
  photoMass: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default Gallery;

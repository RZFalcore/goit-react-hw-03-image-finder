import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit, onChange }) => (
  <form className={styles.searchForm} onSubmit={onSubmit}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      onChange={onChange}
    />
  </form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;

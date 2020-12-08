import React from "react";
import PropTypes from "prop-types";

import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit, onChange, value }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Searchbar;

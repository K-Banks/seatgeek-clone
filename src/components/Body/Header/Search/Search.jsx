import React from 'react';
import styles from './Search.css';

function Search() {
  return (
    <div className={styles.searchContainer}>
      <h1>Millions of tickets in one place.</h1>
      <div className={styles.search}>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;

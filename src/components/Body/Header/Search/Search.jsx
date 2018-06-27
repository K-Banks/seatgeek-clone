import React from 'react';
import styles from './Search.css';

function Search() {
  return (
    <div className={styles.searchContainer}>
      <h1>Millions of tickets in one place.</h1>
      <div className={styles.search}>
        <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 16 16"><path fill="#1673E6" d="M15.7,14.3l-4-4C12.5,9.3,13,7.9,13,6.5C13,2.9,10.1,0,6.5,0S0,2.9,0,6.5S2.9,13,6.5,13c1.4,0,2.8-0.5,3.8-1.3l4,4 c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C16.1,15.3,16.1,14.7,15.7,14.3z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5 S9,11,6.5,11z"></path></svg>
        <input type="text" placeholder="Search by team, artist, event, or venue"/>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;

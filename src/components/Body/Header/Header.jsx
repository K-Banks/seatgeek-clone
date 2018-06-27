import React from 'react';
import Nav from './Nav/Nav.jsx';
import Search from './Search/Search.jsx';

import styles from './Header.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <Nav />
        <Search />
      </div>
    </div>
  );
}
// <div className={styles.headerSearch}>
// </div>

export default Header;

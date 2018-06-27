import React from 'react';
import Header from './Header/Header.jsx';
import Events from './Events/Events.jsx';

import styles from './Body.css';

function Body() {
  return (
    <div className={styles.container}>
      <Header />
      <Events />
    </div>
  );
}

export default Body;

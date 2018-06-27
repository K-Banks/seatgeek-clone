import React from 'react';
import Header from './Header/Header.jsx';
import Events from './Events/Events.jsx';
import Footer from './Footer/Footer.jsx';

import styles from './Body.css';

function Body() {
  return (
    <div className={styles.container}>
      <Header />
      <Events />
      <Footer />
    </div>
  );
}

export default Body;

import React from 'react';
import styles from './Footer.css';
import Legal from './Legal/Legal.jsx';
import Links from './Links/Links.jsx';
import MajorLinks from './MajorLinks/MajorLinks.jsx';
import MobileLinks from './MobileLinks/MobileLinks.jsx';

function Footer() {
  return(
    <div>
      <div className={styles.border}>
        <MajorLinks />
      </div>
      <div className={styles.wrapper}>
        <Links />
        <MobileLinks />
        <Legal />
      </div>
    </div>
  );
}

export default Footer;

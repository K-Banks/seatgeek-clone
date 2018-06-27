import React from 'react';
import styles from './MajorLinks.css';
const links = ["NFL", "NBA", "NHL", "MLB", "MLS", "Rock", "Pop", "Hip-Hop", "Country", "Concerts", "Theater", "NCAAB", "NCAAF"];

function MajorLinks() {
  return(
    <div className={styles.link}>
      {links.map((link) =>
        <a>{link}</a>
      )}
    </div>
  );
}

export default MajorLinks;

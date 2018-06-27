import React from 'react';
import styles from './Legal.css';

function Legal() {
  return(
    <div className={styles.legal}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>
        &copy; 2018 SeatGeek. All rights reserved. <span>Made in NYC.</span>
      </div>
    </div>
  );
}

export default Legal;

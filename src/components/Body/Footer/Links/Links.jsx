import React from 'react';
import styles from './Links.css';

function Links() {
  return(
    <div className={styles.footerLinks}>
      <ul>
        <li>Learn More</li>
        <li>About</li>
        <li>SeatGeek Enterprise</li>
        <li>MLS Partnership</li>
        <li>Sell on SeetGeek</li>
        <li>Event News</li>
      </ul>
      <ul>
        <li>Platform</li>
        <li>Platform</li>
        <li>API Docs</li>
        <li>Dev Blog</li>
        <li>Dev Community</li>
        <li>Partner Program</li>
      </ul>
      <ul>
        <li>Community</li>
        <li>Help & Support</li>
        <li>Press</li>
        <li>Jobs</li>
        <li>Twitter</li>
        <li>Our Team</li>
      </ul>
      <ul>
        <li>What's Hot</li>
        <li>Justin Timberlake</li>
        <li>Pink</li>
        <li>Billy Joel</li>
        <li>Sam Smith</li>
        <li>Maroon 5</li>
      </ul>
    </div>
  );
}

export default Links;

import React from 'react';
import styles from './EventLocationFilter.css';

function EventLocationFilter() {
  return(
    <div className={styles.wrapper}>
      <div  className={styles.styler}>
        <span>
          <svg class="Icon__Svg-s1hyhuxm-0 kVIzRj" fill="#494949" stroke="none" color="#494949" height="1em" width="1em" viewBox="0 0 24 24"><path d="M12,13 C10.343,13 9,11.657 9,10 C9,8.343 10.343,7 12,7 C13.657,7 15,8.343 15,10 C15,11.657 13.657,13 12,13 M12,4 C8.686,4 6,6.686 6,10 C6,15 12,20 12,20 C12,20 18,15.063 18,10 C18,6.686 15.314,4 12,4"></path></svg>
          Portland,OR
        </span>
      </div>
      <div>
        <span>
          Any Date
          <svg width="7px" height="4px" viewBox="0 0 7 4" class="sg-dropdown__arrow"><g transform="translate(-77, -9)" fill="#7A7A7A"><path d="M80.50025,13 L77.14625,9.81121873 C76.95125,9.62582447 76.95125,9.32539069 77.14625,9.13904569 C77.34225,8.95365144 77.65825,8.95365144 77.85425,9.13904569 L80.50025,11.6556539 L83.14625,9.13904569 C83.34225,8.95365144 83.65825,8.95365144 83.85425,9.13904569 C84.04925,9.32539069 84.04925,9.62582447 83.85425,9.81121873 L80.50025,13 Z"></path></g></svg>
        </span>
      </div>
    </div>
  );
}

export default EventLocationFilter;

import React from 'react';
import EventItem from './EventItem/EventItem.jsx';
import styles from './EventSection.css';

function EventSection(props) {
  return(
    <div className={styles.eventSectionContainer}>
      <h4>{props.category}</h4>
      <div className={styles.eventSection}>
        {props.events.map((event, index) =>
          <EventItem
            price={event.price}
            title={event.title}
            date={event.date}
            location={event.location}
            image={event.image}
            key={index}
          />
        )}
        <div className={styles.showMore}>
          <svg width="16px" height="12px" viewBox="0 0 16 12" version="1.1"><g transform="translate(-17, -19) translate(25, 83) scale(-1, 1) translate(-25, -83)" fill="#1673E6"><path d="M23.6999998,28.8999999 L23.6999998,18.3000002 C23.6999998,17.7000002 24.0999998,17.3000002 24.6999998,17.3000002 C25.2999998,17.3000002 25.6999998,17.7000002 25.6999998,18.3000002 L25.6999998,28.8999999 L28.9999998,25.6 C29.3999998,25.2 29.9999998,25.2 30.3999998,25.6 C30.7999998,26 30.7999998,26.6 30.3999998,27 L24.6999998,32.6999998 L18.9999998,27 C18.5999998,26.6 18.5999998,26 18.9999998,25.6 C19.3999998,25.2 19.9999998,25.2 20.3999998,25.6 L23.6999998,28.8999999 Z" transform="translate(24.700000, 25) rotate(90) translate(-24.700000, -25)"></path></g></svg>
        </div>
      </div>
    </div>
  );
}

export default EventSection;

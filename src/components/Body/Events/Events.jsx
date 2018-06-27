import React from 'react';
import EventSection from './EventSection/EventSection.jsx';
import EventLocationFilter from './EventLocationFilter/EventLocationFilter.jsx';
import styles from './Events.css';

function Events() {
  return(
    <div>
      <EventLocationFilter />
      <EventSection />
    </div>
  );
}

export default Events;

import React from 'react';
import EventSection from './EventSection/EventSection.jsx';
import EventLocationFilter from './EventLocationFilter/EventLocationFilter.jsx';
import styles from './Events.css';

const happenings = [
  {
    category: "Popular Events",
    events:[
      {
        price: "30",
        title: "Earthquakes at Timbers",
        date: "Jul 7",
        location: "Providence Park",
        image: "",
      },
      {
        price: "55",
        title: "Florence + The Machine with S...",
        date: "Sep 11",
        location: "Moda Center",
        image: "",
      },
      {
        price: "93",
        title: "Logic with Kyle and NF - Nate ...",
        date: "Jul 14",
        location: "Moda Center",
        image: "",
      },
      {
        price: "91",
        title: "Vance Joy with Mondo Cozmo",
        date: "Jul 3",
        location: "McMenamins Historic Edgefi...",
        image: "",
      }
    ]
  },
  {
    category: "Top Artists",
    events:[
      {
        price: "",
        title: "Ed Sheeran",
        date: "",
        location: "",
        image: "",
      },
      {
        price: "",
        title: "BTS",
        date: "",
        location: "",
        image: "",
      },
      {
        price: "",
        title: "Taylor Swift",
        date: "",
        location: "",
        image: "",
      },
      {
        title: "Elton John",
      }
    ]
  }
]

function Events() {
  return(
    <div>
      <EventLocationFilter />
      {happenings.map((happening, index) =>
        <EventSection
          category={happening.category}
          events={happening.events}
          key={index}
        />
      )}
    </div>
  );
}

export default Events;

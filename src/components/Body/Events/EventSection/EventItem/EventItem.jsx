import React from 'react';
import styles from './EventItem.css';
import PropTypes from 'prop-types';

function EventItem(props) {

  return(
    <div>
      <div className={styles.eventImage}>
        <svg class="Icon__Svg-s1hyhuxm-0 kVIzRj" fill="#1673E6" stroke="white" height="1em" width="1em" viewBox="0 0 24 24"><path d="M6.83714286,17.086261 C3.62761905,14.0378538 2,11.2678924 2,8.85086233 C2,7.1641903 2.59761905,5.64198628 3.68428571,4.56519566 C4.6947619,3.56289055 6.03714286,3.01099786 7.46238095,3.01099786 C9.12571429,3.01099786 10.7957143,4.04879607 12,5.75546422 C13.2085714,4.04329714 14.8819048,3 16.55,3 C17.9742857,3 19.3138095,3.55239259 20.3219048,4.5556975 C21.4038095,5.63298803 22,7.15869137 22,8.85086233 C22,11.2678924 20.3728571,14.0378538 17.1628571,17.086261 C14.867619,19.2653373 12.6061905,20.7805427 12.5109524,20.8440303 C12.3552381,20.9480101 12.177619,21 12,21 C11.8228571,21 11.6447619,20.9475102 11.4895238,20.8440303 C11.3942857,20.7805427 9.13285714,19.2653373 6.83714286,17.086261 Z" stroke-width="2"></path></svg>
        {props.price ? <div>${props.price}+</div> : null}
      </div>
      <div className={styles.eventDescription}>
        <h3>{props.title}</h3>
        {props.date ? <p><span>{props.date}</span> &bull; {props.location}</p> : null}
      </div>
    </div>
  );
}

EventItem.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default EventItem;

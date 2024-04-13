import React from 'react';
import './BookingList.css';

const BookingList = ({ serviceTag, name, genre,description, image }) => {

    const getServiceTagColor = (service) => {
        if (service === 'Ambassador') {
          return '#65FFFF';
        } else if (service === 'Event') {
          return '#6FFF97';
        } else if (service === 'Collaboration') {
          return '#F68BFF';
        } else {
          return 'gray'; // Default color for unrecognized services
        }
      };

  return (
    <div className='booking-list'>
        <div>
            <div className="artist-profile">
              <img className='artist-image' src={image} alt="" />
            </div>
            <button className='book-btn' type="button">BOOK</button>
        </div>
      <div className="service-description">
        <div className="service-tag">
          {serviceTag.map((service, index) => (
          <div className='tag' key={index} style={{ backgroundColor: getServiceTagColor(service)}}>
          {service}
        </div>
          ))}
        </div>
        <div className="description">
            <p>Name : {name}</p>
            <p>Genre : {genre}</p>
            <p>{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default BookingList;

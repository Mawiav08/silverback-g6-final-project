import React from 'react';
import PropTypes from 'prop-types';
import './FlightItem.css'; // Import the CSS file

const FlightItem = ({ flight, bookNow }) => {
  return (
    <div className="flight-item">
      <div className="flight-header">
        <img src={flight.airlineLogo} alt={flight.airlineName} className="airline-logo" />
        <h3>{flight.airlineName}</h3>
      </div>
      <div className="flight-details">
        <p><strong>Departure:</strong> {flight.deptTime} - {flight.deptCity}</p>
        <p><strong>Arrival:</strong> {flight.arivalTime} - {flight.arivalCity}</p>
        <p><strong>Stops:</strong> {flight.noOfStops}</p>
        <p><strong>Price:</strong> Ksh. {flight.price}</p>
      </div>
      <button onClick={() => bookNow(flight)} className="book-now-button">
        Book Now
      </button>
    </div>
  );
};

FlightItem.propTypes = {
  flight: PropTypes.object.isRequired,
  bookNow: PropTypes.func.isRequired,
};

export default FlightItem;

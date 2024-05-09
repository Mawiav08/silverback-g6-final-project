import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Payment from './Payment'; // Import the Payment component
import './FlightItem.css'; // Import the CSS file

const FlightItem = ({ flight, bookNow }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleBookNowClick = () => {
    setShowPayment(true);
  };

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
      {!showPayment ? (
        <button onClick={handleBookNowClick} className="book-now-button">
          Book Now
        </button>
      ) : (
        <Payment flight={flight} />
      )}
    </div>
  );
};

FlightItem.propTypes = {
  flight: PropTypes.object.isRequired,
  bookNow: PropTypes.func.isRequired,
};

export default FlightItem;

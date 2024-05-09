import React from 'react';

const MyFlight = ({ selectedFlight }) => {
  console.log('Selected Flight:', selectedFlight); // Debugging statement
  
  return (
    <div>
      {/* Conditional rendering: Display flight card if a flight is selected */}
      {selectedFlight && (
        <div className="flight-card">
          <h2>Flight Details</h2>
          <p><strong>Airline:</strong> {selectedFlight.airlineName}</p>
          <p><strong>Departure:</strong> {selectedFlight.deptTime} - {selectedFlight.deptCity}</p>
          <p><strong>Arrival:</strong> {selectedFlight.arivalTime} - {selectedFlight.arivalCity}</p>
          <p><strong>Stops:</strong> {selectedFlight.noOfStops}</p>
          <p><strong>Price:</strong> Ksh. {selectedFlight.price}</p>
        </div>
      )}
      {!selectedFlight && <p>No flight selected.</p>} {/* Debugging statement */}
    </div>
  );
};

export default MyFlight;


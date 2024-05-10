import React, { useState } from 'react';
import FlightItem from './FlightItem'; // Import the FlightItem component
import './BookFlights.css';

const BookFlights = () => {
  const [formData, setFormData] = useState({
    destination: '',
    origin: '',
    departureDate: '',
    passengers: '',
    isRoundTrip: false
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      isRoundTrip: !formData.isRoundTrip
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch data from the mock API endpoint
      const response = await fetch('http://localhost:4000/flights');
      if (!response.ok) {
        throw new Error('Failed to fetch flight data');
      }
      const data = await response.json();
      setSearchResults(data); // Update searchResults state with fetched data
    } catch (error) {
      console.error('Error fetching flight data:', error.message);
    }
  };

  return (
    <div className="book-flights">
      <h2>Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">From:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="origin">To:</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isRoundTrip"
              checked={formData.isRoundTrip}
              onChange={handleToggle}
            />
            Round Trip
          </label>
        </div>
        <button type="submit">Search Flights</button>
      </form>
      {/* Render FlightItem components based on searchResults */}
      {searchResults.length > 0 && (
        <div className="flight-list">
          {searchResults.map((flight, index) => (
            <FlightItem key={index} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookFlights;

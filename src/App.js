import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import FlightList from './components/FlightList';
import BookFlights from './components/BookFlights';
import './App.css';
import Homelayout from './components/Homelayout';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/flights")
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBookNow = (flight) => {
    // Handle booking logic here
    console.log('Booking flight:', flight);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/book-flights" element={<BookFlights />} />
          <Route path="/flights" element={<FlightList flights={flights} bookNow={handleBookNow} />} />
          <Route path=" " element={<Homelayout/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


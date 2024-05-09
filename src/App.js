import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import FlightList from './components/FlightList';
import BookFlights from './components/BookFlights';
import './App.css';
import Homelayout from './components/Homelayout';
import Payment from './components/Payment';
import MyFlight from './components/Myflight';

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
          <Route path="/book-flights" element={<BookFlights handleBookNow={handleBookNow} />} />
          <Route path="/flights" element={<FlightList flights={flights} handleBookNow={handleBookNow} />} />
          <Route path=" " element={<Homelayout/>}/> 
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/my-flight" element={<MyFlight />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


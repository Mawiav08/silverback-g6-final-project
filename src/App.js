import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import BookFlights from './components/BookFlights';
import './App.css';
import Payment from './components/Payment';
import MyFlight from './components/Myflight';
import Footer from './components/Footer';

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
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/my-flight" element={<MyFlight />} /> 
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


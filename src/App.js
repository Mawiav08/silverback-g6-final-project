import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import BookFlights from './components/BookFlights';
import './App.css';
import Payment from './components/Payment';
import MyFlight from './components/Myflight';
<<<<<<< HEAD
import Navbar from './components/Navbar';
=======
import Footer from './components/Footer';
>>>>>>> ce1b7bd777762a0c28362a8f2dc4bf1f184cc43f

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
      <Navbar />
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


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Access the history object

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send a request to your server with the email and password
    console.log('Submitting form with email:', email, 'and password:', password);
    // Assuming login is successful, navigate to the book flights page
    navigate('/book-flights');
  };

  return (
    <div className="login-container">
      <h1>SkyEase</h1>
      <h2>Revolutionizing Air Travel Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <main>
      </main>
    </div>
  );
}

export default Login;

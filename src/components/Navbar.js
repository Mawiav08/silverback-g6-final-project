import React, { useState } from 'react';
import './Navbar.css';
import { Button } from '@material-ui/core';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src=""  />
        <span>SKY EASE</span>
      </div>
      <div className="navbar-links">
        <button className="navbar-link" onClick={handleLoginClick}>
          Log In
        </button>
        <button className="navbar-link">Book</button>
      </div>
      {showLoginForm && (
        <div className="login-form-overlay">
          <div className="login-form">
            <button className="close-btn" onClick={handleCloseLoginForm}>
              close
            </button>
            <h2>Log In</h2>
            <form onSubmit={handleSubmitLoginForm}>
              <div className="form-group">
                <label htmlFor="username">first name</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="username">second name</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="username">passport no</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Log In</button>
             
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

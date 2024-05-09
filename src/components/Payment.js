import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccessful(true);
    }, 2000);
  };

  // Function to handle navigation to MyFlight page upon successful payment
  const navigateToMyFlight = () => {
    navigate('/my-flight');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <input type="text" placeholder="Card number" />
        </label>
      </div>
      {error && <div>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {paymentSuccessful && (
        <div>
          Payment successful!
          {/* Call function to navigate to MyFlight page */}
          {navigateToMyFlight()}
        </div>
      )}
    </form>
  );
};

export default Payment;

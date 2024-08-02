// src/pages/SuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SuccessPage.css'; // Import CSS for styling

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page or another desired route
  };

  const handleCancelBooking = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="success-page">
      <h2>
        <img 
          src='https://tse3.mm.bing.net/th?id=OIP.TQ0PES3HGa2hHtfxpW_GRQHaDE&pid=Api&P=0&h=180' 
          alt="Success Emoji" 
          className="success-image" 
        />
        Booking Successful🥳!
      </h2>
      <p className='p'>Your booking has been confirmed. Thank you for choosing us!</p>
      <p className="confirmation-message">Booking Confirmed on {new Date().toLocaleDateString()}</p>
      <button className="success-button" onClick={handleBackToHome}>
        Back to Home
      </button>
      <button className="success-button" onClick={handleCancelBooking}>
        Cancel Booking
      </button>
    </div>
  );
};

export default SuccessPage;

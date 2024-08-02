// src/pages/CancelSuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CancelSuccessPage.css'; // Import CSS for styling

const CancelSuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page or another desired route
  };

  return (
    <div className="cancel-success-page">
      <h2>
        <img 
          src='https://tse3.mm.bing.net/th?id=OIP.TQ0PES3HGa2hHtfxpW_GRQHaDE&pid=Api&P=0&h=180' 
          alt="Success Emoji" 
          className="success-image" 
        />
        Booking Cancellation Successful🚫
      </h2>
      <p>Your booking has been successfully canceled. Thank you!</p>
      <button className="success-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default CancelSuccessPage;

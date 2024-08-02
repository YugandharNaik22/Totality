// src/components/PaymentForm.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/PaymentForm.css'; // Import the CSS file

const PaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // Extract booking details from location state
  const bookingDetails = location.state?.bookingDetails;

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsPaymentProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentProcessing(false);
      // Navigate to success page after payment is confirmed
      navigate('/success');
    }, 2000); // Simulate a delay for payment processing
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      <div className="payment-details">
        <p>Booking Details:</p>
        <pre>
          {bookingDetails && Object.entries(bookingDetails).map(([key, value]) => (
            <div key={key}>
              <span className="key">{key}:</span> <span className="value">{value}</span>
            </div>
          ))}
        </pre>
      </div>
      <form onSubmit={handlePaymentSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handlePaymentChange}
          required
        /><br/>
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={paymentDetails.expiryDate}
          onChange={handlePaymentChange}
          required
        /><br/>
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handlePaymentChange}
          required
        /><br/>
        <button type="submit" disabled={isPaymentProcessing}>
          {isPaymentProcessing ? 'Processing Payment...' : 'Confirm Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

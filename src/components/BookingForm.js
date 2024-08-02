// src/components/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ onConfirm }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    country: '',
    zipcode: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment form and pass booking details
    navigate('/payment', { state: { bookingDetails } });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={bookingDetails.name}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingDetails.email}
          onChange={handleChange}
          required
        /><br/>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={bookingDetails.phone}
          onChange={handleChange}
          required
        /><br/>
        <textarea
          name="address"
          placeholder="Address"
          value={bookingDetails.address}
          onChange={handleChange}
          required
        /><br/>
        <textarea
          name="state"
          placeholder="State"
          value={bookingDetails.state}
          onChange={handleChange}
          required
        /><br/>
        <textarea
          name="country"
          placeholder="Country"
          value={bookingDetails.country}
          onChange={handleChange}
          required
        /><br/>
        <textarea
          name="zipcode"
          placeholder="Zipcode"
          value={bookingDetails.zipcode}
          onChange={handleChange}
          required
        /><br/>
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default BookingForm;

// src/components/PropertyCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css'; // Ensure this line is present to import the styles

const PropertyCard = ({ property, onBook }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.name} className="property-image" />
      <h3>{property.name}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price} per night</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Amenities:</strong> {property.amenities}</p>
      <Link to={`/book/${property.id}`} className="button" onClick={() => onBook(property)}>
        Book Now
      </Link>
    </div>
  );
};

export default PropertyCard;

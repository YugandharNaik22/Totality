// src/components/Filter.js
import React from 'react';
import '../styles/Filter.css';

const Filter = ({ filters, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={onFilterChange}
      />
      
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={onFilterChange}
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={onFilterChange}
      />
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={filters.bedrooms}
        onChange={onFilterChange}
      />
      <input
        type="text"
        name="amenities"
        placeholder="Amenities"
        value={filters.amenities}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;

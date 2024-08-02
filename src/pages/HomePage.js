// src/pages/HomePage.js
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import '../styles/HomePage.css';
import propertiesData from '../data/properties.json';

const HomePage = ({ onBook }) => {
  const [filters, setFilters] = useState({
    location: '',
    maxPrice: '',  // Changed from priceRange to maxPrice
    minPrice: '',  // Added minPrice filter
    bedrooms: '',
    amenities: '',
  });

  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const filtered = propertiesData.filter((property) => {
      const matchesLocation = filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const matchesMaxPrice = filters.maxPrice ? property.price <= parseInt(filters.maxPrice) : true;
      const matchesMinPrice = filters.minPrice ? property.price >= parseInt(filters.minPrice) : true;
      const matchesBedrooms = filters.bedrooms ? property.bedrooms >= parseInt(filters.bedrooms) : true;
      const matchesAmenities = filters.amenities ? property.amenities.toLowerCase().includes(filters.amenities.toLowerCase()) : true;

      return matchesLocation && matchesMaxPrice && matchesMinPrice && matchesBedrooms && matchesAmenities;
    });

    setFilteredProperties(filtered);
  };

  const handleClearFilters = () => {
    setFilters({
      location: '',
      maxPrice: '',
      minPrice: '',
      bedrooms: '',
      amenities: '',
    });
    setFilteredProperties(propertiesData); // Reset to show all properties
  };

  return (
    <div className="home-page">
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <div className="filter-buttons">
        <button onClick={handleFilter} className="apply-filters-button">Apply Filters</button>
        <button onClick={handleClearFilters} className="clear-filters-button">Clear Filters</button>
      </div>
      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onBook={onBook} />
          ))
        ) : (
          <p>Sorry, no properties found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;



import React from 'react';
import './Price.css'
import './Category.css'

export default function Price({ selectedPriceRange, setSelectedPriceRange }) {
  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className='sidebar-label-container'>
        <input
          type="radio"
          name="price"
          value="all"
          checked={selectedPriceRange === 'all'}
          onChange={() => handlePriceChange('all')}
        />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input
          type="radio"
          name="price"
          value="price-range-1"
          checked={selectedPriceRange === 'price-range-1'}
          onChange={() => handlePriceChange('price-range-1')}
        />
        <span className='checkmark'></span>0-10000
      </label>
      <label className='sidebar-label-container'>
        <input
          type="radio"
          name="price"
          value="price-range-2"
          checked={selectedPriceRange === 'price-range-2'}
          onChange={() => handlePriceChange('price-range-2')}
        />
        <span className='checkmark'></span>10000-30000
      </label>
      <label className='sidebar-label-container'>
        <input
          type="radio"
          name="price"
          value="price-range-3"
          checked={selectedPriceRange === 'price-range-3'}
          onChange={() => handlePriceChange('price-range-3')}
        />
        <span className='checkmark'></span>30000-80000
      </label>
    </div>
  );
}


import React, { useState } from 'react';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-4">
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900">Store</h1>
          <p className="text-gray-500 mt-2">Buy with web3 wallet!</p>
        </div>
        <div className="max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
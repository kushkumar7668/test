import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Search;
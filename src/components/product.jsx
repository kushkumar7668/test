import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs mt-2 line-clamp-2">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)} USD
          </span>
          <div className="flex items-center text-yellow-500 text-sm">
            <span>⭐</span>
            <span className="ml-1">{product.rating?.rate || 'N/A'}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
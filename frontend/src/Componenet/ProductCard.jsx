import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to product details page and pass the product data as state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="border rounded-lg shadow-md bg-[#1c1b4d] overflow-hidden hover:shadow-lg transition-shadow duration-200 max-w-xs w-full mx-auto cursor-pointer"
      onClick={handleClick} // Navigate on click
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
        <p className="text-gray-300 text-sm mt-1 truncate">{product.description}</p>
        <p className="text-white font-bold mt-2">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

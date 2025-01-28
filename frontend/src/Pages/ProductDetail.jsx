import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product; // Access product data from state
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found!</div>; // Handle case if product is not found
  }

  const handleBuyClick = () => {
    navigate('/buy', { state: { product } }); // Pass product to buy page
  };

  return (
    <div className="bg-[#1c1b4d] min-h-screen text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-[#2b2a6c] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p className="text-lg mt-4">{product.description}</p>
            <p className="text-xl font-bold mt-4">{product.price}</p>

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBuyClick}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              >
                Buy
              </button>
              <button className="bg-gray-700 text-gray-200 py-2 px-6 rounded hover:bg-gray-600">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

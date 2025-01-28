import React from "react";
import Categories from "../Componenet/Categories"; // Adjust path based on your project structure
import { useNavigate } from "react-router-dom"; // Import for navigation
import ProductsList from "./ProductList";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] min-h-screen text-white">
      {/* Hero Section */}
      <div className="flex items-center pt-12 pb-8">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to DecorEASE
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Transform your space with our curated collection of handmade
              decor. Experience elegance, crafted just for you.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://media.craftmaestros.com/media/magefan_blog/Elevate_Your_Home_Decor_With_Craft_Maestros.jpg"
              alt="Decor Inspiration"
              className="rounded-lg shadow-lg w-full max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-8">
        <Categories onCategoryClick={handleCategoryClick} />
      </div>
      <ProductsList/>
    </div>
  );
};

export default Home;

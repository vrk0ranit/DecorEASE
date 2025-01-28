import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Handle mobile menu toggle

  return (
    <header className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">DecorEASE</h1>

        {/* Desktop View */}
        <div className="items-center space-x-8 hidden lg:flex ml-[-40px]">
          <div className="flex items-center border-2 border-gray-600 rounded-lg overflow-hidden mr-4">
            <input
              type="text"
              className="bg-transparent text-white px-4 py-2 w-96 focus:outline-none"
              placeholder="Search..."
            />
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2">
              🔍
            </button>
          </div>

          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-lg ml-[-20px]">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            to="/sign-in"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile View */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg">
            🔍
          </button>

          <Link
            to="/sign-in"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (Visible when menu is open) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 text-center`}
      >
        <nav>
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

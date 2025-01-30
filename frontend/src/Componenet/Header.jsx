import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when user state updates (Fix auto-open issue)
  useEffect(() => {
    setIsDropdownOpen(false); // Ensure dropdown is closed after login/signup
  }, [user]);

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
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Login Button or User Circle */}
          {user ? (
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold"
                onClick={handleDropdownToggle} // Toggle dropdown on click
                title="User Menu"
              >
                {user.username && user.username.slice(0, 2).toUpperCase()}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] text-white rounded-lg shadow-lg w-40">
                  <ul className="space-y-2 p-2">
                    <li>
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Profile</Link>
                    </li>
                    <li>
                      <Link to="/watchlist" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Watchlist</Link>
                    </li>

                    {/* Conditionally render Dashboard for seller */}
                    {user.role === 'seller' && (
                      <li>
                        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Dashboard</Link>
                      </li>
                    )}

                    <li>
                      <button
                        onClick={() => dispatch(logout())}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
              Login
            </Link>
          )}
        </div>

        {/* Mobile View */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg">
            🔍
          </button>

          {/* Mobile Login Button or User Circle */}
          {user ? (
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold"
                onClick={handleDropdownToggle}
                title="User Menu"
              >
                {user.username && user.username.slice(0, 2).toUpperCase()}
              </button>

              {/* Mobile Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] text-white rounded-lg shadow-lg w-40">
                  <ul className="space-y-2 p-2">
                    <li>
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Profile</Link>
                    </li>
                    <li>
                      <Link to="/watchlist" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Watchlist</Link>
                    </li>

                    {/* Conditionally render Dashboard for seller */}
                    {user.role === 'seller' && (
                      <li>
                        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded-md">Dashboard</Link>
                      </li>
                    )}

                    <li>
                      <button
                        onClick={() => dispatch(logout())}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
              Login
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="text-2xl">{isMenuOpen ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 text-center`}>
        <nav>
          <ul className="flex flex-col items-center space-y-4 text-lg">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

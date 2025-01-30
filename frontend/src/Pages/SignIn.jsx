import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../redux/slices/authSlice.js';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/user/sign-in', { email, password });

      // Assuming the backend returns { user: { _id, username, email, role }, token }
      const { user, token } = response.data;

      // Dispatch login action with user data and token
      dispatch(login({ user, token }));

      // Redirect to home page after successful login
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] min-h-screen flex justify-center items-center text-white">
      <div className="bg-[#2a2960] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Sign In</h2>
        <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
          Enter your credentials to access your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Sign-Up Link Section */}
        <div className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-blue-400 hover:text-blue-300">
            Sign Up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

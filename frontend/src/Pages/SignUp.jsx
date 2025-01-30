import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice"; // Import the login action
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "buyer", // Default role is buyer
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post("/api/user/sign-up", formData);
  
      // Extract user details & token from response
      const { user, token } = response.data;
  
      // Ensure user data exists before dispatching login
      if (user && token) {
        dispatch(login({ user, token }));
        navigate("/");
      } else {
        setError("Signup failed, please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  
  return (
    <div className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] min-h-screen flex justify-center items-center text-white">
      <div className="bg-[#2a2960] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Sign Up</h2>
        <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
          Create your account to get started.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Sign Up as:
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <div className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-400 hover:text-blue-300">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

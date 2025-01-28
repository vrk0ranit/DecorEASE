import React from "react";

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] min-h-screen flex justify-center items-center text-white">
      <div className="bg-[#2a2960] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Sign Up</h2>
        <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
          Create your account to get started.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Sign Up as:
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Username Input */}
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
              required
            />
          </div>

          {/* Email Input */}
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
              required
            />
          </div>

          {/* Password Input */}
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
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer */}
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

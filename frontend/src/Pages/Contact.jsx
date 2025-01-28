import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c1b4d] to-[#2b2a6c] min-h-screen flex justify-center items-center px-4 sm:px-8">
      <div className="bg-[#2a2960] p-8 rounded-lg shadow-lg w-full max-w-lg sm:w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8">
          Have questions? Reach out to us below.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#1f1e4c] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
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
              Send Message
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 mt-4">
          Want to call us?{" "}
          <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1b1637] to-[#1c1b4d] text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm leading-6">
              Email:{" "}
              <Link
                to="mailto:info@decoreese.com"
                className="hover:underline text-blue-400"
              >
                info@decoreese.com
              </Link>
            </p>
            <p className="text-sm leading-6">
              Phone:{" "}
              <Link
                to="tel:+1234567890"
                className="hover:underline text-blue-400"
              >
                +1 234 567 890
              </Link>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Decoreese. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

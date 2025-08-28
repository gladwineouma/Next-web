// src/components/Footer/index.tsx

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div>
          <h3 className="font-bold mb-4 text-lg">Exclusive</h3>
          <p>Subscribe</p>
          <p className="text-gray-400 text-sm my-2">Get 10% off your first order</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded text-black"
          />
          <button className="mt-2 w-full bg-red-600 py-2 rounded hover:bg-red-700">
            Subscribe
          </button>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Support</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>11 Bijoy soroni, Dhaka, 1215, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Account</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Quick Link</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Download App</h3>
          <div className="flex space-x-4">
            
            <img
              src="/Images/phone.png"
              alt="Apple Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="/google-play.png"
              alt="Google Play Store"
              className="h-12 cursor-pointer"
            />
          </div>
          <div className="flex space-x-4 text-gray-400 mt-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-red-600" />
            <FaTwitter className="cursor-pointer hover:text-red-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-600" />
            <FaInstagram className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; Copyright 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

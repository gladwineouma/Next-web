// src/components/Header/MainNav.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi';

const MainNav = () => {
  const [liked, setLiked] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold text-black select-none cursor-pointer">
        Exclusive
      </Link>
      
      {/* Menu Links (hidden on mobile) */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-red-600 cursor-pointer">Home</li>
        <li className="hover:text-red-600 cursor-pointer">Contact</li>
        <li className="hover:text-red-600 cursor-pointer">About</li>
        <li className="hover:text-red-600 cursor-pointer">Sign Up</li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 flex-grow max-w-lg ml-8 md:ml-0">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="bg-red-600 hover:bg-red-700 rounded-full p-2 text-white">
          <FiSearch size={20} />
        </button>
      </div>
      
      {/* Icons: Heart and Cart */}
      <div className="flex items-center ml-6 space-x-4">
        <button
          onClick={() => setLiked(!liked)}
          aria-label="Toggle favorite"
          className="focus:outline-none"
        >
          <FiHeart size={24} className={liked ? 'text-red-600' : 'text-gray-700 hover:text-red-600'} />
        </button>

        <Link href="/cart" className="text-gray-700 hover:text-red-600">
          <FiShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;

"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi';

const MainNav = () => {
  const [liked, setLiked] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
      
      <Link href="/" className="text-2xl font-extrabold text-black select-none cursor-pointer">
        Exclusive
      </Link>
      
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-red-600">Home</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-red-600">Contact</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-red-600">About</Link>
        </li>
        <li>
          <Link href="/signup" className="hover:text-red-600">Sign Up</Link>
        </li>
      </ul>

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

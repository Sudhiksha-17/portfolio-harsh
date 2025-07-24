import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-silver text-maroon py-5 px-8 flex justify-between items-center shadow-md w-full relative z-[100]">
      {/* Brand Name */}
      <h1 className="text-4xl font-extrabold tracking-wide">SUVI Collections</h1>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-lg font-medium">
        <Link 
          to="/" 
          className="hover:text-white transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link 
          to="/collections" 
          className="hover:text-white transition duration-300 ease-in-out"
        >
          Collections
        </Link>
        <Link 
          to="/contact" 
          className="hover:text-white transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

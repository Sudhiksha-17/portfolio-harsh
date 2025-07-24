// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "House Decors", path: "/housedecors" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Research", path: "/researchcerts" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md border-b border-white/10 sticky top-0 z-50"
    >
      <Link to="/" className="text-2xl font-extrabold text-red-600 tracking-widest">
        Harshath Udayakumar
      </Link>

      <div className="space-x-4 md:space-x-6 text-sm md:text-base font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-red-400 transition duration-300 ${
              location.pathname === item.path ? "text-red-500" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

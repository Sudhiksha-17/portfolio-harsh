// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Button } from "../components/Button";

export default function Projects() {
  const [showResearch, setShowResearch] = useState(false);
  const [showCerts, setShowCerts] = useState(false);

  const toggleResearch = () => setShowResearch(!showResearch);
  const toggleCerts = () => setShowCerts(!showCerts);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-black via-zinc-900 to-black text-white min-h-screen py-12 px-6"
    >
      <h2 className="text-4xl font-extrabold text-red-500 mb-12 text-center">
        Academic & Certification Highlights
      </h2>

      {/* Research Papers Section */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-zinc-800 border border-zinc-700 hover:border-red-500 transition duration-300 rounded-2xl p-6 max-w-4xl mx-auto mb-10 shadow-md shadow-red-700/20"
      >
        <button
          onClick={toggleResearch}
          className="flex justify-between items-center w-full text-left text-xl font-semibold text-red-400"
        >
          <span>
            <FaFileAlt className="inline mr-2" /> Research Papers
          </span>
          {showResearch ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showResearch && (
          <ul className="mt-4 space-y-4 text-gray-300 text-base list-disc list-inside pl-2">
            <li>
              <strong>Heads Up eXperience (HUX)</strong> — Always-On AI Companion for Human-Computer Interaction <br />
              <span className="text-sm text-gray-500">
                arXiv, Submitted to CHI Conference 2025
              </span>
            </li>
            <li>
              <strong>Breast Cancer Detection Using Deep CNN</strong> — IEEE Conference, NIT Raipur <br />
              <span className="text-sm text-gray-500">Published 2024</span>
            </li>
          </ul>
        )}
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-zinc-800 border border-zinc-700 hover:border-red-500 transition duration-300 rounded-2xl p-6 max-w-4xl mx-auto shadow-md shadow-red-700/20"
      >
        <button
          onClick={toggleCerts}
          className="flex justify-between items-center w-full text-left text-xl font-semibold text-red-400"
        >
          <span>
            <FaCertificate className="inline mr-2" /> Certifications
          </span>
          {showCerts ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showCerts && (
          <ul className="mt-4 space-y-4 text-gray-300 text-base list-disc list-inside pl-2">
            <li>
              <strong>AI for Healthcare</strong> — Stanford Online
            </li>
            <li>
              <strong>Deep Learning Specialization</strong> — Coursera (Andrew Ng)
            </li>
            <li>
              <strong>IoT and Embedded Systems</strong> — NPTEL Certification
            </li>
            <li>
              <strong>Human-Centered Design</strong> — IBM SkillsBuild
            </li>
          </ul>
        )}
      </motion.div>

      <footer className="text-center mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Sudhi K — All Rights Reserved
      </footer>
    </motion.div>
  );
}

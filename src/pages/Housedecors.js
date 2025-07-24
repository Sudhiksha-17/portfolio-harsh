// src/pages/HouseDecors.jsx
import React from "react";
import { FaCouch, FaRulerCombined, FaPaintRoller } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HouseDecors() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen px-6 md:px-16 py-16"
    >
      {/* Hero Section */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4 tracking-wide">
          House Decors
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-2">
          Co-Founder & Creative Technologist
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Blending aesthetic vision with digital innovation to transform spaces into immersive experiences.
        </p>
      </section>

      {/* About the Brand */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.img
          src="/interiors/about.jpg"
          alt="Interior Story"
          className="rounded-2xl shadow-xl w-full object-cover"
          whileHover={{ scale: 1.02 }}
        />
        <div>
          <h2 className="text-3xl font-semibold text-red-400 mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            House Decors was born from the idea of creating warmth and character in every corner. We specialize in blending modern minimalism with cultural richness, delivering tailor-made designs. As a co-founder, I led the design-tech stack, crafted client simulations, and oversaw end-to-end execution.
          </p>
        </div>
      </section>

      {/* Skills / Contributions */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-red-400 text-center mb-12">
          My Contributions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={<FaRulerCombined className="text-4xl text-red-400 mb-4" />}
            title="Design Planning"
            desc="Led space planning, layout optimization, and budget alignment using digital tools and mockup builders."
          />
          <Card
            icon={<FaCouch className="text-4xl text-red-400 mb-4" />}
            title="Client Experience"
            desc="Delivered immersive 3D walkthroughs and curated personalized consultations for styling."
          />
          <Card
            icon={<FaPaintRoller className="text-4xl text-red-400 mb-4" />}
            title="Tech Integration"
            desc="Built mockups and AR/VR simulations using Figma, Unity, and Blender — turning vision into reality."
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-red-400 text-center mb-12">
          Our Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.img
              key={i}
              src={`/interiors/gallery${i}.jpg`}
              alt={`Interior ${i}`}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-red-400 text-center mb-12">
          Client Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Testimonial
            quote="Sudhi brought our home to life — every corner reflects our personality and feels so intentional."
            author="Ria & Tanmay, Bangalore"
          />
          <Testimonial
            quote="Loved the walkthrough experience. The attention to detail and design clarity made all the difference."
            author="Anjali G., Chennai"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Want to build your dream space with us?
        </h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300">
          Book a Free Design Call
        </button>
      </section>
    </motion.div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-red-500/20 transition-all">
      {icon}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic mb-4">“{quote}”</p>
      <p className="text-red-400 font-semibold">{`— ${author}`}</p>
    </div>
  );
}

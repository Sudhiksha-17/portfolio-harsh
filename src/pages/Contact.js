import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen px-4 py-12 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 tracking-wide">
        Contact Me
      </h2>

      <p className="text-md md:text-lg text-gray-300 mb-12 text-center max-w-2xl leading-relaxed">
        Whether it's a freelance opportunity, collaboration, or just a tech talk — feel free to reach out. I'd love to connect with like-minded people!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
        <ContactCard icon={Mail} label="Email" value="sudhi@example.com" />
        <ContactCard icon={Phone} label="Phone" value="+91 98765 43210" />
        <ContactCard icon={MapPin} label="Location" value="Chennai, India" />
      </div>

      <form className="w-full max-w-3xl bg-zinc-900/80 backdrop-blur p-8 rounded-2xl shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <Icon className="text-red-400 w-8 h-8 mb-3" />
      <h4 className="text-lg font-semibold text-white mb-1">{label}</h4>
      <p className="text-sm text-gray-400">{value}</p>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart2,
  Briefcase,
  FolderOpen,
  Mail,
  Paintbrush,
} from "lucide-react";

export default function Home() {
  const cards = [
    {
      title: "House Decors",
      icon: <Paintbrush className="h-8 w-8 text-white" />,
      link: "/housedecors",
      gradient: "from-red-700 via-red-500 to-red-400",
      colSpan: "col-span-2 md:col-span-2 row-span-2",
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-8 w-8 text-white" />,
      link: "/projects",
      gradient: "from-white/10 to-white/5",
    },
    {
      title: "Experience",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      link: "/experience",
      gradient: "from-white/10 to-white/5",
    },
    {
      title: "Research & Certificates",
      icon: <BarChart2 className="h-8 w-8 text-white" />,
      link: "/researchcerts",
      gradient: "from-white/10 to-white/5",
    },
    {
      title: "Contact",
      icon: <Mail className="h-8 w-8 text-white" />,
      link: "/contact",
      gradient: "from-white/10 to-white/5",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 tracking-wide">
          Harshath Udayakumar
        </h1>
        <p className="text-xl mt-3 text-gray-300 italic">
          Data | Business | Risk Analyst
        </p>
      </motion.header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mb-16 text-center px-4"
      >
        <h2 className="text-3xl font-semibold text-red-500 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I specialize in transforming data into actionable insights. With
          experience in risk analysis, business modeling, and data
          visualization, I bring a sharp analytical mindset and a passion for
          solving complex problems using tools like Python, SQL, Tableau, and
          Power BI. <br />
          <br />
          I'm also the <span className="text-red-400 font-bold">Co-Founder</span>{" "}
          of <span className="text-red-500 font-semibold">House Decors</span> — an
          award-nominated interior design brand that's been redefining aesthetics
          and functionality for modern homes. I led strategy, tech integration,
          and digital presence for our clients, helping scale our reach across
          multiple cities.
          <br />
          <br />
          On the academic front, I’ve authored a{" "}
          <span className="text-red-400 font-bold">research paper</span> in the
          domain of predictive analytics, and continue to earn top-tier{" "}
          <span className="text-red-400 font-bold">certifications</span> in data
          science and business analysis.
        </p>
      </motion.section>

      {/* Grid Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[150px] px-2"
      >
        {cards.map((card, index) => (
          <Link key={index} to={card.link} className={`${card.colSpan || ""}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${card.gradient} hover:shadow-red-600/40 flex flex-col items-center justify-center text-center h-full border border-white/10`}
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Harshath Udayakumar — All Rights Reserved
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Button } from "../components/Button";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      icon: <Briefcase size={36} className="text-red-400" />,
      title: "Research Intern — IIT Kanpur",
      short: "Worked on Vision-Language Models and HCI at HIVE Lab.",
      details:
        "Conducted research at HIVE Lab. Built a Vision-Language interface for contextual UI control using PyTorch, LangChain, and Transformers. Led the HUXpert project and submitted a CHI paper.",
      duration: "May 2024 – July 2024",
    },
    {
      icon: <Code2 size={36} className="text-red-400" />,
      title: "App Developer — Matic",
      short: "Led development of their internal mobile application.",
      details:
        "Built Matic’s internal mobile app with Flutter. Integrated APIs, handled Firebase Auth & Analytics, and automated workflow tasks.",
      duration: "Jan 2024 – Mar 2024",
    },
    {
      icon: <GraduationCap size={36} className="text-red-400" />,
      title: "STIRS Grant Winner — College Project",
      short: "Received funding for AI-powered hologram system.",
      details:
        "Developed a holographic assistant with real-time speech-to-visual AI. Used custom projection, Python, and UI systems. Funded under STIRS Innovation Grant.",
      duration: "Aug 2023 – Dec 2023",
    },
  ];

  const skills = [
    { skill: "Python", icon: "🐍", level: "★★★★★", usedIn: "IIT Kanpur, STIRS" },
    { skill: "Transformers (NLP)", icon: "🧠", level: "★★★★☆", usedIn: "IIT Kanpur" },
    { skill: "Flutter", icon: "📱", level: "★★★★★", usedIn: "Matic" },
    { skill: "Firebase", icon: "🔥", level: "★★★★☆", usedIn: "Matic" },
    { skill: "UI/UX Design", icon: "🎨", level: "★★★★☆", usedIn: "Matic, STIRS" },
    { skill: "Human-Centered Design", icon: "🧍‍♀️", level: "★★★★☆", usedIn: "IIT Kanpur" },
    { skill: "Project Leadership", icon: "🧭", level: "★★★★☆", usedIn: "All Projects" },
  ];

  const caseStudies = experiences.map((exp, index) => ({
    title: exp.title,
    result:
      index === 0 ? "Submitted CHI Paper" : index === 1 ? "App Launched" : "Funded",
    impact:
      index === 0
        ? "HUXpert system enabled contextual interfaces for research."
        : index === 1
        ? "Streamlined internal ops across 3 departments."
        : "Enabled live AI-driven demos with holograms.",
  }));

  const timelineData = [...experiences].reverse();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-black via-zinc-900 to-black text-white min-h-screen py-12 px-6"
    >
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-red-500 mb-12 text-center">
        Experience
      </h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 rounded-2xl shadow-md shadow-red-700/30 p-6 border border-zinc-700 hover:border-red-500 transition duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">{exp.icon}</div>
            <h3 className="text-2xl font-bold text-red-400 mb-2">{exp.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{exp.short}</p>
            <p className="text-xs text-gray-500 italic mb-4">{exp.duration}</p>
            <Button
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm"
              onClick={() => setSelectedExperience(exp)}
            >
              View Details
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Skill Tree */}
      <div className="mb-20 max-w-5xl mx-auto px-4 relative">
        <h3 className="text-2xl font-semibold text-red-400 mb-6 text-center">Skill Tree</h3>
        <svg className="absolute w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="10%" x2="50%" y2="33%" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="50%" y1="40%" x2="50%" y2="65%" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
        </svg>

        <div className="flex flex-col gap-10 items-center">
          {/* AI/ML */}
          <div className="flex flex-col items-center">
            <div className="text-red-400 font-bold mb-2">AI / ML</div>
            <div className="flex gap-6 flex-wrap justify-center">
              {["🐍 Python", "🧠 Transformers", "🧍‍♀️ Human-Centered Design"].map((text) => (
                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-800 border border-zinc-700 rounded-xl px-6 py-3 text-center hover:border-red-500 transition"
                  key={text}
                >
                  <div className="text-red-300 font-medium">{text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* App Dev */}
          <div className="flex flex-col items-center">
            <div className="text-red-400 font-bold mb-2">App Development</div>
            <div className="flex gap-6 flex-wrap justify-center">
              {["📱 Flutter", "🔥 Firebase", "🎨 UI/UX Design"].map((text) => (
                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-800 border border-zinc-700 rounded-xl px-6 py-3 text-center hover:border-red-500 transition"
                  key={text}
                >
                  <div className="text-red-300 font-medium">{text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="flex flex-col items-center">
            <div className="text-red-400 font-bold mb-2">Leadership</div>
            <div className="flex gap-6 flex-wrap justify-center">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-800 border border-zinc-700 rounded-xl px-6 py-3 text-center hover:border-red-500 transition"
              >
                <div className="text-red-300 font-medium">🧭 Project Leadership</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-red-400 mb-6 text-center">Timeline</h3>
        <ol className="relative border-l border-zinc-600">
          {timelineData.map((exp, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute w-4 h-4 bg-red-500 rounded-full -left-2.5 border border-white" />
              <h4 className="text-lg font-bold text-red-300">{exp.title}</h4>
              <time className="block text-sm italic text-gray-400 mb-1">{exp.duration}</time>
              <p className="text-sm text-gray-300">{exp.short}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Case Studies */}
      <div className="mb-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {caseStudies.map((cs, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-red-500 transition"
          >
            <h4 className="text-lg font-bold text-red-400 mb-2">{cs.title}</h4>
            <p className="text-sm text-gray-300 mb-1">
              <strong className="text-red-300">Outcome:</strong> {cs.result}
            </p>
            <p className="text-sm text-gray-300">
              <strong className="text-red-300">Impact:</strong> {cs.impact}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Matrix */}
      <div className="mb-20 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-red-400 mb-6 text-center">Skills in Action</h3>
        <div className="overflow-x-auto rounded-xl border border-zinc-700">
          <table className="min-w-full bg-zinc-900 text-sm">
            <thead className="bg-zinc-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Skill</th>
                <th className="px-4 py-3 text-left">Proficiency</th>
                <th className="px-4 py-3 text-left">Projects Used In</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {skills.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-800 transition">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <span className="text-xl">{row.icon}</span>
                    <span className="text-red-300 font-medium">{row.skill}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{row.level}</td>
                  <td className="px-4 py-3 text-gray-400">{row.usedIn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-xl max-w-xl w-full mx-4 border border-zinc-700 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-red-400">
                {selectedExperience.title}
              </h3>
              <button
                className="text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setSelectedExperience(null)}
              >
                ✕
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-4">{selectedExperience.details}</p>
            <p className="text-xs text-gray-500 italic mb-6">
              Duration: {selectedExperience.duration}
            </p>
            <Button
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm"
              onClick={() => setSelectedExperience(null)}
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Harshath Udayakumar — All Rights Reserved
      </footer>
    </motion.div>
  );
}

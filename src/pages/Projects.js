import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import {
  Briefcase,
  ShieldAlert,
  Database,
  Cpu,
  Activity,
  HardDrive,
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      icon: <Briefcase size={40} className="text-red-400" />,
      title: "Business Model Design",
      short: "Strategic business model with 12-month rollout.",
      details:
        "Led the development of a market-entry strategy for a mid-sized company. Designed pricing models, performed SWOT and competitor analysis, and delivered a 12-month roadmap. \n\nTools Used: Excel, PowerBI, Tableau\n\nChallenges: Market volatility, competitor saturation.",
      category: "Business",
    },
    {
      icon: <ShieldAlert size={40} className="text-red-400" />,
      title: "Credit Risk Engine",
      short: "Predictive model for loan default risk.",
      details:
        "Built a predictive risk scoring system using logistic regression and XGBoost. Deployed alerting system for internal stakeholders. \n\nTools Used: Python, Flask, React\n\nChallenges: Imbalanced dataset, regulatory thresholds.",
      category: "AI / Analytics",
    },
    {
      icon: <Database size={40} className="text-red-400" />,
      title: "Telecom Data Pipeline",
      short: "End-to-end pipeline with dashboards for insights.",
      details:
        "Processed 2M+ rows in a daily-refresh pipeline. Automated using Airflow and deployed dashboards with Superset.\n\nTools Used: Python, Pandas, SQL, Superset, Airflow\n\nChallenges: Large-scale performance tuning, scheduling delays.",
      category: "Data / Analytics",
    },
    {
      icon: <Cpu size={40} className="text-red-400" />,
      title: "Smart Drip IV Predictor",
      short: "AI for vein injection prediction using dorsal vein image data.",
      details:
        "Won top 10 in a national hackathon. Used image segmentation and ML model to predict the point of injection.\n\nTools Used: OpenCV, Keras, LabelMe\n\nChallenges: Lack of annotated data, real-time performance.",
      category: "Healthcare / AI",
    },
    {
      icon: <HardDrive size={40} className="text-red-400" />,
      title: "Digital Twin of EV Battery",
      short: "Real-time battery drain simulation with optimization.",
      details:
        "Simulated lithium-ion battery behavior using digital twins. Integrated with IoT sensors for real-time feedback.\n\nTools Used: MATLAB, Simulink, Arduino\n\nChallenges: Modeling accuracy, sensor calibration.",
      category: "IoT / Hardware",
    },
    {
      icon: <Activity size={40} className="text-red-400" />,
      title: "House Decors - Interior Co.",
      short: "Co-founded a design consultancy for smart interiors.",
      details:
        "Handled UI/UX and backend for client bookings and VR-based interior previews. Generated significant monthly revenue within 6 months.\n\nTools Used: Figma, React, Firebase\n\nChallenges: Client scaling, visual consistency.",
      category: "Business / Design",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-black via-zinc-900 to-black text-white min-h-screen py-12 px-6"
    >
      <h2 className="text-4xl font-extrabold text-red-500 mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 rounded-2xl shadow-md shadow-red-700/30 p-6 border border-zinc-700 hover:border-red-500 transition duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex items-center gap-4 mb-3">{project.icon}</div>
            <h3 className="text-xl font-bold text-red-400 mb-1">{project.title}</h3>
            <span className="text-xs bg-red-600 px-2 py-1 rounded-full text-white uppercase tracking-wider">
              {project.category}
            </span>
            <p className="text-sm text-gray-300 mt-2">{project.short}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal View - Full Page Like */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-y-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-zinc-900 p-8 rounded-2xl max-w-3xl w-full mt-10 mb-10 border border-zinc-700 shadow-2xl text-white"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-extrabold text-red-400">
                {selectedProject.title}
              </h3>
              <button
                className="text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
            <div className="text-sm mb-3 text-gray-300 whitespace-pre-line">
              {selectedProject.details}
            </div>

            <div className="mt-6">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <footer className="text-center mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} Sudhi K — All Rights Reserved
      </footer>
    </motion.div>
  );
}

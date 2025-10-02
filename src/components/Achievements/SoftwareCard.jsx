import { motion } from "motion/react";
import { formatDate, motionConfig } from "../../utils/functions";
import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaShieldAlt } from "react-icons/fa";
import TextRedShadow from "../Global/TextRedShadow";
// Componente para cada Software
export default function SoftwareCard({ software, index }) {
  return (
    <motion.div
      key={software.id}
      {...motionConfig}
      transition={{ delay: index * 0.1 }}
      className="relative backdrop-blur-md shadow-lg border border-white/30 p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF1744]/60"
    >
      <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-red-500/60 transition duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="w-5 h-5 text-[#FF1744]" />
            <TextRedShadow className="text-lg font-semibold">
              {software.title}
            </TextRedShadow>
          </div>
          <FaCheckCircle className="w-5 h-5 text-green-400" />
        </div>

        <div className="space-y-3 mb-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <FaFileAlt className="w-4 h-4 text-[#FF1744]" />
            <span className="font-mono">{software.registrationNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-[#FF1744]" />
            <span>{formatDate(software.date)}</span>
          </div>
          <div className="font-medium">{software.institution}</div>
        </div>

        <p className="text-white/90 text-sm mb-4 leading-relaxed">
          {software.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {software.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 neon-red-button text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

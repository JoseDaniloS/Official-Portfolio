import { motion } from "motion/react";
import { motionConfig } from "../../utils/functions";

// Componente para resumo de conquistas
export default function SummaryCard({ icon, count, label }) {
  return (
    <motion.div
      {...motionConfig}
      className="text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md border border-white/20 rounded-full mb-3 group-hover:border-[#FF1744]/60 transition-colors">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{count}</div>
      <div className="text-sm text-white/70">{label}</div>
    </motion.div>
  );
}

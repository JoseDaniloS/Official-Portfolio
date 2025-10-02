import { motion } from "motion/react";
import { formatDate, motionConfig } from "../../utils/functions";
import TextRedShadow from "../Global/TextRedShadow";
import { FaAward, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
// Componente para cada Certificado
export default function CertificateCard({ cert, index }) {
  return (
    <motion.div
      key={cert.id}
      {...motionConfig}
      transition={{ delay: index * 0.1 }}
      className="relative backdrop-blur-md shadow-lg border border-white/30 p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF1744]/60"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF1744] to-transparent opacity-20 rounded-bl-full"></div>
      <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-red-500/60 transition duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          {cert.insigne ? (
            <img
              src={cert.insigne}
              className="absolute -right-13 w-24 -top-13 max-md:-right-12"
            />
          ) : (
            <FaAward className="w-8 h-8 text-[#FF1744]" />
          )}
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium border ${
              cert.status === "Ativo"
                ? "bg-green-500/20 text-green-300 border-green-400/30"
                : "bg-gray-500/20 text-gray-300 border-gray-400/30"
            }`}
          >
            {cert.status}
          </span>
        </div>

        <TextRedShadow className="text-lg font-semibold mb-2">
          {cert.title}
        </TextRedShadow>

        <div className="space-y-2 mb-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <FaFileAlt className="w-4 h-4 text-[#FF1744]" />
            <span className="font-medium">{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-[#FF1744]" />
            <span>Emitido: {formatDate(cert.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="w-4 h-4 text-[#FF1744]" />
            <span>
              Válido até:{" "}
              {cert.validUntil === "Vitalício"
                ? cert.validUntil
                : formatDate(cert.validUntil)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="px-3 py-1 neon-red-button text-white text-xs font-semibold rounded-lg">
            {cert.level}
          </span>

          <a
            className="flex items-center gap-1 text-[#FF1744] hover:text-[#FF3D3D] text-sm font-medium transition-colors transform duration-300 hover:scale-105"
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Verificar</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <div className="mt-3 pt-3 border-t border-white/20">
          <span className="text-xs text-white/50 font-mono">
            ID: {cert.credentialId}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

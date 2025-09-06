import TitleSections from "../../../../components/Global/TitleSections";
import { motion } from "framer-motion";
import { motionConfig } from "../../../../utils/functions";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import InsigniaMercadoPago from "../../../../assets/Insignia_MercadoPago.svg"
import {
  FaCode,
  FaCertificate,
  FaCheckCircle,
  FaFileAlt,
  FaShieldAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaAward,
  FaStar,
} from "react-icons/fa";

export default function Achievements() {
  // Dados dos registros de software
  const softwareRegistrations = [
    {
      id: 1,
      title: "Folha Frequência - UFERSA",
      registrationNumber: "BR512025002187-9",
      date: "2024-11-30",
      institution: "INPI - Instituto Nacional da Propriedade Industrial",
      description:
        "Sistema completo para gestão de instituições de ensino com módulos de matrícula, notas e relatórios.",
      technologies: ["HTML", "Javascript", "React"],
    },
  ];

  // Dados dos certificados
  const certificates = [
    {
      id: 1,
      title: "Mercado Pago Checkout PRO",
      issuer: "Mercado Pago | Developers",
      insigne: InsigniaMercadoPago,
      date: "2025-08-16",
      credentialId: "cert_ccba35bb7a5011f0861306528aba163c",
      validUntil: "Vitalício",
      level: "Parceiros",
      status: "Ativo",
      link: "https://www.mercadopago.com.br/developers/panel/developer-program/certification/cert_ccba35bb7a5011f0861306528aba163c",
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <section
      id="achievements"
      className="w-full min-h-screen flex flex-col items-center justify-around py-16"
    >
      <TitleSections text="Conquistas" />

      <div className="md:w-[80%] max-md:w-[90vw] space-y-16">
        {/* Seção de Registros de Software */}
        <motion.div {...motionConfig} className="w-full">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 backdrop-blur-md border border-white/20 rounded-full">
              <FaCode className="w-6 h-6 text-[#FF1744]" />
            </div>
            <TextRedShadow className="text-2xl font-extrabold">
              Registros de Software
            </TextRedShadow>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
            {softwareRegistrations.map((software, index) => (
              <motion.div
                key={software.id}
                {...motionConfig}
                transition={{ delay: index * 0.1 }}
                className="relative backdrop-blur-md shadow-lg border border-white/30 p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF1744]/60"
              >
                {/* Glow effect */}
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

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <FaFileAlt className="w-4 h-4 text-[#FF1744]" />
                      <span className="font-mono">
                        {software.registrationNumber}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <FaCalendarAlt className="w-4 h-4 text-[#FF1744]" />
                      <span>{formatDate(software.date)}</span>
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      {software.institution}
                    </div>
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
            ))}
          </div>
        </motion.div>

        {/* Seção de Certificados */}
        <motion.div {...motionConfig} className="w-full">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 backdrop-blur-md border border-white/20 rounded-full">
              <FaCertificate className="w-6 h-6 text-[#FF1744]" />
            </div>
            <TextRedShadow className="text-2xl font-extrabold">
              Certificações
            </TextRedShadow>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                {...motionConfig}
                transition={{ delay: index * 0.1 }}
                className="relative backdrop-blur-md shadow-lg border border-white/30 p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF1744]/60 "
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF1744] to-transparent opacity-20 rounded-bl-full"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-red-500/60 transition duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    {cert.insigne ? <img src={cert.insigne} className="absolute -right-13 w-24 -top-13 max-md:-right-12"/> : <FaAward className="w-8 h-8 text-[#FF1744]" />}
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
            ))}
          </div>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          {...motionConfig}
          className="w-full backdrop-blur-md shadow-lg border border-white/30 rounded-3xl p-8 transition-all duration-300 hover:border-[#FF1744]/60"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-red-500/60 transition duration-500 pointer-events-none" />

          <div className="text-center mb-8">
            <TextRedShadow className="text-2xl font-extrabold mb-2">
              Resumo das Conquistas
            </TextRedShadow>
            <p className="text-white/80">
              Um overview dos meus registros e certificações
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              {...motionConfig}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md border border-white/20 rounded-full mb-3 group-hover:border-[#FF1744]/60 transition-colors">
                <FaCode className="w-8 h-8 text-[#FF1744]" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {softwareRegistrations.length}
              </div>
              <div className="text-sm text-white/70">Softwares Registrados</div>
            </motion.div>

            <motion.div
              {...motionConfig}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md border border-white/20 rounded-full mb-3 group-hover:border-[#FF1744]/60 transition-colors">
                <FaCertificate className="w-8 h-8 text-[#FF1744]" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {certificates.length}
              </div>
              <div className="text-sm text-white/70">Certificações</div>
            </motion.div>

            <motion.div
              {...motionConfig}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md border border-white/20 rounded-full mb-3 group-hover:border-[#FF1744]/60 transition-colors">
                <FaCheckCircle className="w-8 h-8 text-[#FF1744]" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {certificates.filter((cert) => cert.status === "Ativo").length}
              </div>
              <div className="text-sm text-white/70">Certificados Ativos</div>
            </motion.div>

            <motion.div
              {...motionConfig}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md border border-white/20 rounded-full mb-3 group-hover:border-[#FF1744]/60 transition-colors">
                <FaStar className="w-8 h-8 text-[#FF1744]" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">2025</div>
              <div className="text-sm text-white/70">Ano Mais Produtivo</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

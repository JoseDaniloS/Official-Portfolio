import { motion } from "motion/react";
import SoftwareCard from "../../../../components/Achievements/SoftwareCard";
import { motionConfig } from "../../../../utils/functions";
import { certificates, softwareRegistrations } from "../../../../database/achievements";
import { FaCertificate, FaCheckCircle, FaCode, FaStar } from "react-icons/fa";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import CertificateCard from "../../../../components/Achievements/CertificateCard";
import SummaryCard from "../../../../components/Achievements/SummaryCard";
import TitleSections from "../../../../components/Global/TitleSections";

export default function Achievements() {
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
              <SoftwareCard
                key={software.id}
                software={software}
                index={index}
              />
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
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          {...motionConfig}
          className="w-full relative backdrop-blur-md shadow-lg border border-white/30 rounded-3xl p-8 transition-all duration-300 hover:border-[#FF1744]/60"
        >
          <div className="text-center mb-8">
            <TextRedShadow className="text-2xl font-extrabold mb-2">
              Resumo das Conquistas
            </TextRedShadow>
            <p className="text-white/80">
              Um overview dos meus registros e certificações
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SummaryCard
              icon={<FaCode className="w-8 h-8 text-[#FF1744]" />}
              count={softwareRegistrations.length}
              label="Softwares Registrados"
            />
            <SummaryCard
              icon={<FaCertificate className="w-8 h-8 text-[#FF1744]" />}
              count={certificates.length}
              label="Certificações"
            />
            <SummaryCard
              icon={<FaCheckCircle className="w-8 h-8 text-[#FF1744]" />}
              count={
                certificates.filter((cert) => cert.status === "Ativo").length
              }
              label="Certificados Ativos"
            />
            <SummaryCard
              icon={<FaStar className="w-8 h-8 text-[#FF1744]" />}
              count={2025}
              label="Ano Mais Produtivo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import TitleSections from "../../../../components/Global/TitleSections";

import Carcara from "/HabilidadesIcons/Carcara.webp";
import Chronos from "/HabilidadesIcons/Chronos.svg";
import { motion } from "framer-motion";
import { motionConfig } from "../../../../utils/functions";
import { habilidades } from "../../../../database/Habilidades";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import { useState } from "react";
import { SkillModal } from "../../../../components/Experience/SkillModal";

export default function Experience() {
  const experiences = [
    {
      logo: Chronos,
      cargo: "Desenvolvedor Front End",
      project: "Chronos - Web Soluções",
      start: "Jan/2025",
      end: "Até o Momento"
    },
    {
      logo: Carcara,
      cargo: "Desenvolvedor de Software",
      project: "Projeto Carcará - UFERSA",
      start: "Ago/2024",
      end: "Até o Momento"
    }
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col py-16 gap-16 items-center justify-around"
    >
      <TitleSections text="Experiência" />
      <div className="md:w-[80%] max-md:w-[90vw] flex flex-wrap justify-center gap-8 text-white">
        {experiences.map(exp => <ExperienceCard key={exp.project} {...exp} />)}
      </div>
      <SoftSkills />
      <HardSkills />
    </section>
  );
}

function ExperienceCard({ logo, cargo, project, start, end }) {
  return (
    <motion.div
      {...motionConfig}
      className="relative w-[500px] max-w-full min-w-[300px] bg-[] pt-16 px-6 pb-8 rounded-3xl mt-4 flex flex-col items-center gap-5 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Ícone flutuante com glow */}
      <div className="absolute -top-12 py-4 px-8 rounded-t-2xl flex items-center justify-center">
        <img
          src={logo}
          alt={project ? `Logo do projeto ${project}` : "Logo do projeto"}
          className="h-14 object-contain"
          loading="lazy"
        />
      </div>

      {/* Cargo */}
      <TextRedShadow className="text-xl font-semibold tracking-wide text-center">
        {cargo}
      </TextRedShadow>

      {/* Projeto */}
      <p className="text-base font-medium text-white text-center leading-relaxed">
        {project}
      </p>

      {/* Linha decorativa */}
      <div className="w-20 h-[2px] bg-red-500 rounded-full opacity-50" />

      {/* Período */}
      <p className="text-sm font-light text-gray-400">
        <time dateTime={start}>{start}</time> —{" "}
        <time dateTime={end}>{end}</time>
      </p>

      {/* Glow animado suave no hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-red-500/60 transition duration-500 pointer-events-none" />
    </motion.div>
  );
}

function HardSkills() {
  return (
    <section className="md:w-[80%] max-md:w-[90vw] flex flex-col justify-center gap-5">
      <h2 className="text-2xl font-extrabold text-center text-white">
        Hard Skills
      </h2>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-7 justify-center items-center">
        {habilidades.map(hab => <HardSkillCard key={hab.nome} {...hab} />)}
      </div>
    </section>
  );
}

function HardSkillCard({ nome, icon, description }) {
  const [showModal, setShowModal] = useState(false);

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        {...motionConfig}
        className="flex relative flex-col items-center bg-[#181818] text-white p-6 rounded-xl shadow-md border border-[#303030] transition-all duration-300 hover:scale-105 hover:border-neon-red hover:shadow-neon-red-hover hover:shadow-lg cursor-pointer"
        onClick={() => setShowModal(true)} // Abre o modal ao clicar no card
      >
        <img
          src={icon}
          alt={`Ícone de ${nome}`}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Renderiza o modal condicionalmente */}
      {showModal && (
        <SkillModal
          nome={nome}
          icon={icon}
          description={description}
          onClose={handleCloseModal} // Passa a função de fechamento para o modal
        />
      )}
    </>
  );
}

function SoftSkills() {
  const skills = [
    "Trabalho em equipe",
    "Comunicação",
    "Resolução de problemas",
    "Adaptabilidade",
    "Liderança",
    "Pensamento crítico",
    "Gestão de tempo",
    "Criatividade"
  ];

  return (
    <section className="md:w-[80%] max-md:w-[90vw] flex flex-col justify-center gap-5">
      <h2 className="text-2xl font-extrabold text-center text-white">
        Soft Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) =>
          <motion.div
            {...motionConfig}
            key={index}
            className="px-5 py-2 shadow-xl text-white neon-red-button font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {skill}
          </motion.div>
        )}
      </div>
    </section>
  );
}

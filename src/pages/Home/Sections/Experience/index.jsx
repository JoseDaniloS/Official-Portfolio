import TitleSections from "../../../../components/Global/TitleSections";

import Carcara from "/HabilidadesIcons/Carcara.webp";
import Chronos from "/HabilidadesIcons/Chronos.svg";
import { motion } from "motion/react";
import { motionConfig } from "../../../../utils/functions";
import { habilidades } from "../../../../database/Habilidades";

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
      className="relative w-[500px] max-w-full min-w-[300px] bg-gradient-to-b from-[#161616] to-[#121212] pt-16 px-6 pb-8 rounded-3xl text-white border border-[#262626] mt-4 shadow-lg flex flex-col items-center gap-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-red-500/30"
    >
      {/* Ícone flutuante com glow */}
      <div className="absolute -top-10 p-2 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
        <img
          src={logo}
          alt={project ? `Logo do projeto ${project}` : "Logo do projeto"}
          className="h-12 object-contain"
        />
      </div>

      {/* Cargo */}
      <h2 className="text-xl font-semibold text-white text-shadow-neon-red text-shadow-lg tracking-wide text-center">
        {cargo}
      </h2>

      {/* Projeto */}
      <p className="text-base font-medium text-gray-300 text-center leading-relaxed">
        {project}
      </p>

      {/* Linha decorativa */}
      <div className="w-12 h-[2px] bg-red-500 rounded-full opacity-50" />

      {/* Período */}
      <p className="text-sm font-light text-gray-400">
        <time dateTime={start}>{start}</time> — <time dateTime={end}>{end}</time>
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
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 justify-center items-center">
        {habilidades.map(hab =>
          <HardSkillCard key={hab.nome} Habilidade={hab.nome} Icon={hab.icon} />
        )}
      </div>
    </section>
  );
}

function HardSkillCard({ Habilidade, Icon }) {
  return (
    <motion.div
      {...motionConfig}
      className="flex flex-col items-center bg-[#181818] text-white p-6 rounded-xl shadow-md border border-[#303030] transition-all duration-300 hover:scale-105 hover:border-neon-red hover:shadow-neon-red-hover hover:shadow-lg"
    >
      <img
        src={Icon}
        alt={`Ícone de ${Habilidade}`}
        className="w-14 h-14 object-contain"
      />
      <span className="mt-3 text-sm font-semibold text-gray-300">
        {Habilidade}
      </span>
    </motion.div>
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

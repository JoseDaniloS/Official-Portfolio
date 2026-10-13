import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import TitleSections from "../../../../components/Global/TitleSections";
import { EASE_OUT, staggerConfig } from "../../../../utils/functions";
import { habilidades } from "../../../../database/Habilidades";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import BrutalistButton from "../../../../components/Global/BrutalistButton";
import { experiences } from "../../../../database/Experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col py-16 gap-16 items-center justify-around"
    >
      <TitleSections text="Experiência" label="// 02" />
      <Timeline />
      <SoftSkills />
      <HardSkills />
    </section>
  );
}

function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative md:w-[80%] max-md:w-[90vw] text-white">
      {/* Linha base + linha que "acende" conforme o scroll */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-white/10" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] origin-top neon-red-button"
      />

      <ol className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.cargo} {...exp} />
        ))}
      </ol>
    </div>
  );
}

function ExperienceCard({ logo, cargo, project, start, end, highlights = [], stacks = [] }) {
  const isCurrent = end === "Atual";

  return (
    <motion.li
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="relative pl-12 md:pl-16"
    >
      {/* Marcador na linha do tempo */}
      <span className="absolute left-4 md:left-6 top-8 -translate-x-1/2 flex h-4 w-4">
        {isCurrent && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-60 animate-ping" />
        )}
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#FF1744] bg-[#0e0e0e]" />
      </span>

      <div className="group relative backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-[#FF1744]/60 hover:shadow-[0_0_30px_#FF174422]">
        <div className="flex max-md:flex-col md:items-center gap-4 mb-4">
          {logo && (
            <img
              src={logo}
              alt={`Logo ${project}`}
              className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          )}
          <div className="flex-1">
            <TextRedShadow className="text-xl font-semibold tracking-wide">
              {cargo}
            </TextRedShadow>
            <p className="text-base text-white/80">{project}</p>
          </div>
          <p className="font-mono text-sm text-white/60 whitespace-nowrap">
            <time>{start}</time> — <time>{end}</time>
          </p>
        </div>

        {highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-white/75 leading-relaxed list-none">
            {highlights.map((text) => (
              <li key={text} className="flex gap-2">
                <span className="text-neon-red mt-[2px]">▹</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}

        {stacks.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {stacks.map((stack) => (
              <span
                key={stack}
                className="font-mono text-xs px-2.5 py-1 rounded-md border border-[#FF1744]/30 bg-[#FF1744]/10 text-white/85"
              >
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

function HardSkills() {
  return (
    <section className="md:w-[80%] max-md:w-[90vw] flex flex-col justify-center gap-8">
      {habilidades.map((group) => (
        <div key={group.categoria} className="flex flex-col gap-5">
          <h2 className="text-2xl font-extrabold text-center text-white">
            {group.categoria}
          </h2>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {group.itens.map((hab, i) => (
              <motion.div key={hab.nome} {...staggerConfig(i, 0.04)}>
                <BrutalistButton
                  logo={hab.icon}
                  title={hab.nome}
                  subtitle="Powered by"
                  hoverColor="#FF3D3D"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function SoftSkills() {
  const skills = [
    "Liderança técnica",
    "Revisão de código",
    "Comunicação com clientes",
    "Resolução de problemas",
    "Mentoria",
    "Trabalho em equipe",
    "Pensamento crítico",
    "Gestão de tempo",
  ];

  return (
    <section className="md:w-[80%] max-md:w-[90vw] flex flex-col justify-center gap-5">
      <h2 className="text-2xl font-extrabold text-center text-white">
        Soft Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            {...staggerConfig(index, 0.05)}
            key={skill}
            className="px-5 py-2 shadow-xl text-white neon-red-button font-semibold rounded-lg transition-transform duration-300 hover:scale-105"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

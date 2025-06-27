import { motion } from "motion/react";
import TitleSections from "../../../../components/Global/TitleSections";
import About_MeImage from "/About_Me.webp";
import { motionConfig } from "../../../../utils/functions";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="w-full min-h-screen max-xl:h-full flex flex-col items-center max-lg:mt-[88px] justify-around py-[40px] gap-20"
    >
      <TitleSections text="Sobre mim" />
      <motion.div
        {...motionConfig}
        className="h-full max-md:w-[90vw] md:w-[80%] max-md:flex-col text-[#ccc] flex  gap-6 md:gap-12"
      >
        <div className="w-full md:w-5/6 flex flex-col gap-6 items-center text-left">
          <div className="flex flex-col gap-5 md:text-left">
            <h2 className="text-3xl max-md:text-2xl text-white font-bold">
              Eu sou <i className="text-white text-shadow-neon-red text-shadow-lg">José Danilo</i>, um
              <span className="font-bold text-white"> desenvolvedor front-end</span>, CEO da
              <i className="text-white text-shadow-neon-red text-shadow-lg"> Chronos - Web Soluções</i> e
              pesquisador no projeto Carcará.
            </h2>
            <p>
              Sou apaixonado por <span className="font-bold text-white">desenvolvimento web</span> e{" "}
              <span className="font-bold text-white">computação em nuvem</span>, sempre buscando criar
              soluções inovadoras e eficientes. Atualmente, atuo como{" "}
              <span className="font-bold text-white">desenvolvedor front-end</span> e líder da{" "}
              <span className="font-bold text-white">Chronos - Web Soluções</span>, onde ajudo empresas e
              profissionais a transformar ideias em produtos digitais de alto
              impacto.
            </p>
            <p>
              Além disso, faço parte do{" "}
              <span className="font-bold text-white">projeto de pesquisa Carcará na UFERSA</span>, onde
              contribuo para o desenvolvimento de sistemas que aprimoram a
              infraestrutura de TI e a experiência acadêmica.
            </p>
            <p>
              Meu foco está em desenvolver{" "}
              <span className="font-bold text-white">
                interfaces modernas, responsivas e de alta performance
              </span>, utilizando tecnologias como{" "}
              <span className="font-bold text-white">React, Tailwind CSS e TypeScript</span>. Acredito no
              aprendizado contínuo e na colaboração para criar produtos digitais
              que realmente fazem a diferença.
            </p>
          </div>
        </div>

        <PersonalInfo />
      </motion.div>

      {/* Imagem e estatísticas */}
      <motion.div
        {...motionConfig}
        className="flex flex-col text-white max-md:w-[90vw] md:w-[80%] gap-6"
      >
        <img
          src={About_MeImage}
          alt="Participação no Evento Start-up Day 22/03/2025"
          loading="lazy"
          className=" max-xl:w-full xl:max-w-[600px] h-[400px] object-center object-cover rounded-lg"
        />
        <legend>Participação no Evento Start-up Day 22/03/2025</legend>
        {/* Estatísticas */}
        <div className="md:w-[80%] max-md:w-[90vw] max-md:flex-col flex  justify-center md:justify-between text-[42px] gap-6">
          <StatCard value="1+" label="Ano de Experiência" />
          <StatCard value="5+" label="Clientes Satisfeitos" />
          <StatCard value="7+" label="Projetos Realizados" />
        </div>
      </motion.div>
    </div>
  );
}

// Componente de Estatística para evitar repetição
function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <i className="font-bold text-shadow-neon-red text-shadow-lg">
        {value}
      </i>
      <p className="text-[18px] text-[#aaa]">
        {label}
      </p>
    </div>
  );
}

function PersonalInfo() {
  const personalData = [
    { label: "Nome", value: "José Danilo" },
    {
      label: "Email",
      value: (
        <a
          className="text-white text-shadow-neon-red text-shadow-lg"
          href="mailto:danilojose.1d@gmail.com"
          aria-label="Enviar email para José Danilo"
        >
          danilojose.1d@gmail.com
        </a>
      )
    },
    { label: "Idade", value: "20 anos" },
    { label: "De", value: "Pau dos Ferros, Rio Grande do Norte, Brasil" }
  ];

  return (
    <div className="flex flex-col gap-5 text-xl w-full md:w-auto">
      {personalData.map((item, index) =>
        <p key={index} className="border-b border-[#303030] py-2">
          <i className="font-bold text-white">{item.label}:</i>{" "}
          {item.value}
        </p>
      )}
    </div>
  );
}

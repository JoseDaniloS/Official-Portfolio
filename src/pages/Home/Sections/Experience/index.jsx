import TitleSections from "../../../../components/TitleSections";

import HTML from "/HabilidadesIcons/icons8-html5.svg";
import CSS from "/HabilidadesIcons/icons8-css3.svg";
import JavaScript from "/HabilidadesIcons/icons8-javascript.svg";
import Lambda from "/HabilidadesIcons/icons8-awslambda.svg";
import TailwindCSS from "/HabilidadesIcons/icons8-tailwindcss.svg";
import AWS from "/HabilidadesIcons/icons8-aws.svg";
import TypeScript from "/HabilidadesIcons/icons8-texto-datilografado.svg";
import Postman from "/HabilidadesIcons/icons8-postman-inc-48.webp";
import React from "/HabilidadesIcons/icons8-react-48.webp";
import MongoDB from "/HabilidadesIcons/MongoDB.svg";
import Route53 from "/HabilidadesIcons/Route_53.svg";
import APIGateway from "/HabilidadesIcons/API_Gateway.svg";
import Amplify from "/HabilidadesIcons/Amplify.svg";
import DynamoDB from "/HabilidadesIcons/DynamoDB.svg";
import Carcara from "/HabilidadesIcons/Carcara.webp";
import Chronos from "/HabilidadesIcons/Chronos.svg";

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
      cargo: "Desenvolvedor de Sistemas",
      project: "Projeto Carcará - UFERSA",
      start: "Ago/2024",
      end: "Até o Momento"
    }
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col py-16 gap-16 items-center justify-around bg-[#303030]"
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
    <div className="w-[500px] max-w-full min-w-[300px] bg-[#181818] p-6 flex flex-col items-center gap-4 rounded-xl text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#202020]">
      <img
        src={logo}
        alt={logo ? `Logo do projeto ${project}` : "Imagem não disponível"}
        className="h-16 object-contain"
      />
      <h2 className="text-xl font-semibold text-center text-red-500">
        {cargo}
      </h2>
      <p className="font-medium text-md">{project}</p>
      <p className="text-sm font-light">
        <time dateTime={start}>{start}</time> - <time dateTime={end}>{end}</time>
      </p>
    </div>
  );
}


function HardSkills() {
  const habilidades = [
    { nome: "HTML5", icon: HTML },
    { nome: "CSS3", icon: CSS },
    { nome: "JavaScript", icon: JavaScript },
    { nome: "TypeScript", icon: TypeScript },
    { nome: "React.js", icon: React },
    { nome: "Tailwind CSS", icon: TailwindCSS },
    { nome: "PostMan", icon: Postman },
    { nome: "AWS", icon: AWS },
    { nome: "Route53", icon: Route53 },
    { nome: "Lambda", icon: Lambda },
    { nome: "Amplify", icon: Amplify },
    { nome: "API Gateway", icon: APIGateway },
    { nome: "DynamoDB", icon: DynamoDB },
    { nome: "MongoDB", icon: MongoDB }
  ];

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
    <div className="flex flex-col items-center bg-[#181818] text-white p-6 rounded-xl shadow-md border border-[#303030] transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-lg">
      <img src={Icon} alt={`Ícone de ${Habilidade}`} className="w-14 h-14 object-contain" />
      <span className="mt-3 text-sm font-semibold text-gray-300">
        {Habilidade}
      </span>
    </div>
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
          <div
            key={index}
            className="px-5 py-2 bg-[#0E0E0E] text-red-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white"
          >
            {skill}
          </div>
        )}
      </div>
    </section>
  );
}

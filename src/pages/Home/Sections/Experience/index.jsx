import TitleSections from "../../../../components/TitleSections";

import HTML from "/HabilidadesIcons/icons8-html5.svg";
import CSS from "/HabilidadesIcons/icons8-css3.svg";
import JavaScript from "/HabilidadesIcons/icons8-javascript.svg";
import Lambda from "/HabilidadesIcons/icons8-awslambda.svg";
import TailwindCSS from "/HabilidadesIcons/icons8-tailwindcss.svg";
import AWS from "/HabilidadesIcons/icons8-aws.svg";
import TypeScript from "/HabilidadesIcons/icons8-texto-datilografado.svg";
import Postman from "/HabilidadesIcons/icons8-postman-inc-48.png";
import React from "/HabilidadesIcons/icons8-react-48.png";
import MongoDB from "/HabilidadesIcons/MongoDB.svg";
import Route53 from "/HabilidadesIcons/Route_53.svg";
import APIGateway from "/HabilidadesIcons/API_Gateway.svg";
import Amplify from "/HabilidadesIcons/Amplify.svg";
import DynamoDB from "/HabilidadesIcons/DynamoDB.svg";
import Carcara from "/HabilidadesIcons/Carcara.png";
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
    <div
      id="experience"
      className="w-full min-h-screen flex flex-col py-[40px] gap-20 items-center justify-around bg-[#303030]"
    >
      <TitleSections text="Experiência" />
      <div className="md:w-[80%] max-md:w-[90vw] max-md:flex-col flex gap-20 justify-center text-white h-full">
        {experiences.map((exp, index) =>
          <ExperienceCard key={index} {...exp} />
        )}
      </div>
      <Habilidades />
    </div>
  );
}

function ExperienceCard({ logo, cargo, project, start, end }) {
  return (
    <div className="max-md:w-full w-[500px] h-[350px] border-[#444] border shadow-2xl p-5 px-10 flex flex-col gap-5 justify-evenly rounded-[10px] text-white">
      <img src={logo} alt={`Logo de ${project}`} className="h-5/12" />

      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">
          <span className="text-red-600">{cargo}</span> <br/> {project}
        </h1>
        <p className="font-bold">
          {start} - {end}
        </p>
      </div>
    </div>
  );
}

function Habilidades() {
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
    <div className="md:w-[80%] max-md:w-[90vw] flex flex-col justify-center gap-5">
      <h1 className="text-2xl font-extrabold text-center text-white">
        Hard Skills
      </h1>
      <div className="w-full justify-center flex-wrap flex gap-7 items-center">
        {habilidades.map((hab, index) =>
          <HabilidadeCard key={index} Habilidade={hab.nome} Icon={hab.icon} />
        )}
      </div>
    </div>
  );
}

function HabilidadeCard({ Habilidade, Icon }) {
  return (
    <div className="flex flex-col text-red-800 items-center border-b-4 border-red-800 bg-[#0E0E0E] text-center p-5 hover:scale-115 transition-all duration-300 rounded-tl-[30%] gap-2">
      <span className="font-bold">
        {Habilidade}
      </span>
      <img src={Icon} alt={Habilidade} className="w-12 h-12" />
    </div>
  );
}

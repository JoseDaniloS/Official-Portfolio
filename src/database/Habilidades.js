import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

import {
  FaAws,
  FaServer,
} from "react-icons/fa";

import { MdOutlineDns } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BiCloudUpload } from "react-icons/bi";
import { PiDatabaseBold } from "react-icons/pi";

export const habilidades = [
  {
    nome: "HTML5",
    icon: SiHtml5,
    description:
      "Linguagem de marcação para estruturar e apresentar conteúdo na web.",
  },
  {
    nome: "CSS3",
    icon: SiCss3,
    description:
      "Linguagem de estilo para definir a aparência visual e o layout das páginas.",
  },
  {
    nome: "JavaScript",
    icon: SiJavascript,
    description:
      "Linguagem de programação essencial para criar interatividade e dinamismo na web.",
  },
  {
    nome: "TypeScript",
    icon: SiTypescript,
    description:
      "Um superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade e a manutenção do código.",
  },
  {
    nome: "React.js",
    icon: SiReact,
    description:
      "Biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas.",
  },
  {
    nome: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Framework CSS que permite a criação rápida de designs personalizados e responsivos diretamente no HTML.",
  },
  {
    nome: "PostMan",
    icon: SiPostman,
    description:
      "Ferramenta para testar, documentar e depurar APIs REST e GraphQL.",
  },
  {
    nome: "AWS",
    icon: FaAws,
    description:
      "Amazon Web Services, a plataforma de computação em nuvem mais abrangente do mundo.",
  },
  {
    nome: "Route53",
    icon: MdOutlineDns,
    description:
      "Serviço de DNS altamente escalável e de alta disponibilidade da AWS para roteamento de tráfego.",
  },
  {
    nome: "Lambda",
    icon: FaServer,
    description:
      "Serviço de computação serverless da AWS que executa código em resposta a eventos.",
  },
  {
    nome: "Amplify",
    icon: BiCloudUpload,
    description:
      "Framework da AWS para construir, implantar e hospedar aplicações web e mobile completas.",
  },
  {
    nome: "API Gateway",
    icon: TbApi,
    description:
      "Serviço da AWS que atua como um 'front door' para APIs, gerenciando roteamento, segurança e tráfego.",
  },
  {
    nome: "DynamoDB",
    icon: PiDatabaseBold,
    description:
      "Banco de dados NoSQL de alto desempenho e totalmente gerenciado pela AWS.",
  },
  {
    nome: "MongoDB",
    icon: SiMongodb,
    description:
      "Banco de dados NoSQL baseado em documentos, flexível e escalável, ideal para dados não estruturados.",
  },
];

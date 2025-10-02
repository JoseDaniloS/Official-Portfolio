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

import { FaAws, FaServer } from "react-icons/fa";

import { MdOutlineDns } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BiCloudUpload } from "react-icons/bi";
import { PiDatabaseBold } from "react-icons/pi";

export const habilidades = [
  {
    nome: "HTML5",
    icon: SiHtml5,
  },
  {
    nome: "CSS3",
    icon: SiCss3,
  },
  {
    nome: "JavaScript",
    icon: SiJavascript,
  },
  {
    nome: "TypeScript",
    icon: SiTypescript,
  },
  {
    nome: "React.js",
    icon: SiReact,
  },
  {
    nome: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    nome: "PostMan",
    icon: SiPostman,
  },
  {
    nome: "AWS",
    icon: FaAws,
  },
  {
    nome: "Route53",
    icon: MdOutlineDns,
  },
  {
    nome: "Lambda",
    icon: FaServer,
  },
  {
    nome: "Amplify",
    icon: BiCloudUpload,
  },
  {
    nome: "API Gateway",
    icon: TbApi,
  },
  {
    nome: "DynamoDB",
    icon: PiDatabaseBold,
  },
  {
    nome: "MongoDB",
    icon: SiMongodb,
  },
];

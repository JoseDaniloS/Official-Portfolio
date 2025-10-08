import { FaNode } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiStrapi,
  SiGithub,
  SiNotion,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiAmazonroute53,
  SiAwslambda,
  SiAwsamplify,
  SiAmazonapigateway,
  SiAmazondynamodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Unused imports can be removed, but keeping them doesn't hurt.

export const habilidades = [
  { nome: "HTML5", icon: SiHtml5 },
  { nome: "CSS3", icon: SiCss3 },
  { nome: "JavaScript", icon: SiJavascript },
  { nome: "TypeScript", icon: SiTypescript },
  { nome: "React.js", icon: SiReact },
  { nome: "Tailwind CSS", icon: SiTailwindcss },
  { nome: "Postman", icon: SiPostman },
  { nome: "AWS", icon: SiAmazonwebservices }, // ✅ Corrigido para o logo principal da AWS
  { nome: "Route53", icon: SiAmazonroute53 }, // ✅ Corrigido
  { nome: "Lambda", icon: SiAwslambda }, // ✅ Corrigido
  { nome: "Amplify", icon: SiAwsamplify }, // ✅ Corrigido
  { nome: "API Gateway", icon: SiAmazonapigateway }, // ✅ Corrigido
  { nome: "DynamoDB", icon: SiAmazondynamodb }, // ✅ Corrigido
  { nome: "MongoDB", icon: SiMongodb },
  { nome: "Node.js", icon: FaNode },
  { nome: "Express.js", icon: SiExpress },
  { nome: "Strapi", icon: SiStrapi },
  { nome: "Docker", icon: SiDocker },
  { nome: "Git", icon: SiGit },
  { nome: "GitHub", icon: SiGithub },
  { nome: "VS Code", icon: VscVscode },
  { nome: "Notion", icon: SiNotion },
];

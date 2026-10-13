import { FaNode, FaBullhorn, FaCubes } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiStrapi,
  SiGithub,
  SiGit,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGithubactions,
  SiAmazonwebservices,
  SiAmazonroute53,
  SiAwslambda,
  SiAwsamplify,
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiAmazoncognito,
  SiAmazonec2,
  SiAmazonsqs,
  SiAmazons3,
  SiAwselasticloadbalancing,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Agrupado por área, na mesma divisão do currículo
export const habilidades = [
  {
    categoria: "Cloud & Serverless (AWS)",
    itens: [
      { nome: "AWS", icon: SiAmazonwebservices },
      { nome: "Lambda", icon: SiAwslambda },
      { nome: "API Gateway", icon: SiAmazonapigateway },
      { nome: "DynamoDB", icon: SiAmazondynamodb },
      { nome: "Cognito", icon: SiAmazoncognito },
      { nome: "SNS", icon: FaBullhorn },
      { nome: "SQS", icon: SiAmazonsqs },
      { nome: "SAM", icon: FaCubes },
      { nome: "S3", icon: SiAmazons3 },
      { nome: "EC2", icon: SiAmazonec2 },
      { nome: "Load Balancer", icon: SiAwselasticloadbalancing },
      { nome: "Route53", icon: SiAmazonroute53 },
      { nome: "Amplify", icon: SiAwsamplify },
    ],
  },
  {
    categoria: "DevOps & Infraestrutura",
    itens: [
      { nome: "Docker", icon: SiDocker },
      { nome: "Nginx", icon: SiNginx },
      { nome: "GitHub Actions", icon: SiGithubactions },
      { nome: "Linux", icon: SiLinux },
      { nome: "Git", icon: SiGit },
      { nome: "GitHub", icon: SiGithub },
    ],
  },
  {
    categoria: "Backend",
    itens: [
      { nome: "Node.js", icon: FaNode },
      { nome: "Express.js", icon: SiExpress },
      { nome: "Strapi", icon: SiStrapi },
      { nome: "Postman", icon: SiPostman },
    ],
  },
  {
    categoria: "Frontend",
    itens: [
      { nome: "React.js", icon: SiReact },
      { nome: "TypeScript", icon: SiTypescript },
      { nome: "JavaScript", icon: SiJavascript },
      { nome: "Tailwind CSS", icon: SiTailwindcss },
      { nome: "HTML5", icon: SiHtml5 },
      { nome: "CSS3", icon: SiCss3 },
      { nome: "VS Code", icon: VscVscode },
    ],
  },
];

import Chronos from "/HabilidadesIcons/Chronos.svg";
import Ufersa from "/HabilidadesIcons/Ufersa.png";
import Carcara from "/HabilidadesIcons/Carcara.webp";
import Madcall from "/HabilidadesIcons/Madcall.png";

export const experiences = [
  {
    logo: Ufersa,
    cargo: "Bolsista AAMEG - Professor AWS Fundamentos da Nuvem",
    project: "Universidade Federal Rural do Semi-Árido - UFERSA",
    start: "Ago/2026",
    end: "Atual",
    highlights: [
      "Ministro aulas de fundamentos de computação em nuvem na AWS, levando para a sala de aula a prática dos projetos em produção.",
    ],
    stacks: ["AWS", "Cloud Computing"],
  },
  {
    logo: Chronos,
    cargo: "Fundador e Responsável Técnico",
    project: "Chronos Web Soluções — Estúdio de desenvolvimento",
    start: "Jan/2025",
    end: "Atual",
    highlights: [
      "Coloquei em produção um gateway de pagamentos com Pix usado por clientes reais, com painel administrativo para gestão de transações em tempo real.",
      "Desacoplei o processamento de transações com arquitetura orientada a eventos (SNS + SQS) e padronizei o deploy das Lambdas entre ambientes com SAM.",
      "Padronizei deploy e manutenção da carteira com Docker, Nginx, SSL/TLS e pipelines de CI/CD no GitHub Actions.",
      "Provisiono e mantenho a infraestrutura AWS (Lambda, EC2, DynamoDB, API Gateway, Cognito, Amplify, Route53) com foco em escalabilidade, segurança e custo controlado.",
    ],
    stacks: ["React", "TypeScript", "Node.js", "Lambda", "DynamoDB", "SNS/SQS", "SAM", "Docker", "GitHub Actions"],
  },
  {
    logo: Carcara,
    cargo: "Desenvolvedor Front-End / Tech Lead",
    project: "Projeto de Pesquisa Carcará — UFERSA",
    start: "2024",
    end: "Atual",
    highlights: [
      "Lidero tecnicamente uma equipe de front-end de 2 desenvolvedores, definindo decisões de arquitetura e conduzindo revisões de código.",
      "Mantenho em produção Landing Pages e um PWA com deploy contínuo, mesmo sob restrições de VPN institucional.",
      "Treinei os membros juniores em boas práticas de front-end, reduzindo o tempo de onboarding em novas features.",
    ],
    stacks: ["React", "TypeScript", "AWS", "PWA"],
  },
  {
    logo: Ufersa,
    cargo: "Engenheiro de Software — Bolsista FAPERN",
    project: "UFERSA, em projeto com a USP (Rede REBECA)",
    start: "Ago/2025",
    end: "Jun/2026",
    highlights: [
      "Desenvolvi e mantive em produção o portal de notícias da Rede REBECA, administrando e evoluindo o CMS Strapi v3 na infraestrutura da USP.",
      "Implementei pipeline de deploy automatizado com GitHub Actions e Self-Hosted Runner.",
      "Criei monitoramento com alertas via Discord Webhooks e rotinas de backup automatizado com Cron.",
      "Containerizei os serviços com Docker e configurei Nginx como proxy reverso via HTTPS.",
    ],
    stacks: ["Strapi", "Docker", "Nginx", "GitHub Actions", "Linux"],
  },
  {
    logo: Madcall,
    cargo: "Técnico em Informática (Estagiário)",
    project: "Madcal Home Center",
    start: "Jun/2022",
    end: "Dez/2022",
    highlights: [
      "Gerenciei servidores e realizei configuração, manutenção e atualização de sistemas operacionais em todo o parque tecnológico.",
      "Atendi chamados de suporte técnico (help desk) de hardware e software para a equipe interna.",
    ],
    stacks: ["Infraestrutura de TI", "Help Desk"],
  },
];

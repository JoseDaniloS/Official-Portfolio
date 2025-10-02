// Dados dos registros de software
import InsigniaMercadoPago from "../assets/Insignia_MercadoPago.svg";

export const softwareRegistrations = [
  {
    id: 1,
    title: "Folha Frequência - UFERSA",
    registrationNumber: "BR512025002187-9",
    date: "2024-11-30",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Sistema web para gerenciamento de frequência de alunos em instituições de ensino, incluindo módulos de registro e relatórios de presença.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
  {
    id: 2,
    title: "Folha Frequência - UFERSA (App)",
    registrationNumber: "BR512025004638-3",
    date: "2024-11-30",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Aplicativo móvel para registro de frequência de bolsas acadêmicas e esportivas, com sincronização automática com a base web.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
  {
    id: 3,
    title: "Portal Projeto Carcará (Front)",
    registrationNumber: "BR512025004635-9",
    date: "2024-11-01",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Interface front-end para gerenciamento de projetos e atividades do Projeto Carcará, permitindo controle de informações e relatórios visuais.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
  {
    id: 4,
    title: "Portal do UFERSA DEV (Front)",
    registrationNumber: "BR512025004636-7",
    date: "2025-09-05",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Portal front-end voltado para divulgação e gerenciamento de conteúdo relacionado à comunidade de desenvolvedores UFERSA DEV.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
];

// Dados dos certificados
export const certificates = [
  {
    id: 1,
    title: "Mercado Pago Checkout PRO",
    issuer: "Mercado Pago | Developers",
    insigne: InsigniaMercadoPago,
    date: "2025-08-16",
    credentialId: "cert_ccba35bb7a5011f0861306528aba163c",
    validUntil: "Vitalício",
    level: "Parceiros",
    status: "Ativo",
    link: "https://www.mercadopago.com.br/developers/panel/developer-program/certification/cert_ccba35bb7a5011f0861306528aba163c",
  },
];

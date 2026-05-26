// Dados dos registros de software
import InsigniaMercadoPago from "../assets/Insignia_MercadoPago.svg";

export const softwareRegistrations = [
  {
    id: 1,
    title: "Folha Frequência - UFERSA (Front)",
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
  {
    id: 5,
    title: "Calculadora de Pontes com Palitos de Picolé Treliçados",
    registrationNumber: "BR512025003367-2",
    date: "2025-05-28",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "A Calculadora de Pontes com Palitos de Picolé Treliçados da UFERSA é uma aplicação web desenvolvida em React, cujo objetivo é auxiliar estudantes e/ou pesquisadores no cálculo da análise estrutural de protótipos treliçados de pontes com palitos de picolé.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
  {
    id: 6,
    title: "ECONOQUIZ (Front)",
    registrationNumber: "BR512026000816-6",
    date: "2025-10-28",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Ferramenta computacional de gamificação educacional estruturada sobre um motor de lógica de perguntas e respostas. Apresenta uma interface gráfica interativa onde o usuário enfrenta cenários baseados na ODS 8 e em teoria econômica, contando com rotinas de feedback instantâneo, reforço pedagógico e armazenamento de métricas de desempenho.",
    technologies: ["HTML", "Javascript", "React", "CSS"],
  },
  {
    id: 7,
    title: "ECONOQUIZ (Back)",
    registrationNumber: "BR512026000819-0",
    date: "2025-10-28",
    institution: "INPI - Instituto Nacional da Propriedade Industrial",
    description:
      "Motor lógico e infraestrutura de back-end do EconoQuiz. Responsável pelo gerenciamento do banco de dados de perguntas e respostas sobre a ODS 8 e teoria econômica, execução do algoritmo de validação de inputs, processamento das rotinas de pontuação e persistência das métricas de desempenho para geração de relatórios de evolução.",
    technologies: ["Node.js", "Javascript", "Express", "Database"],
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

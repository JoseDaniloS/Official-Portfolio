// Dados dos registros de software
import InsigniaMercadoPago from "../assets/Insignia_MercadoPago.svg";
import InsigniaCloudPractitioner from "../assets/Badges/aws-certified-cloud-practitioner.png";
import InsigniaAwsServerlessDemonstrated from "../assets/Badges/aws-serverless-demonstrated.png";
import InsigniaAwsApplicationNetworkingDemonstrated from "../assets/Badges/aws-application-networking-demonstrated.png";
import InsigniaAwsIncidentResponse from "../assets/Badges/aws-incident-response-demonstrated.png";
import InsigniaAwsDataLakehouse from "../assets/Badges/aws-data-lakehouse-demonstrated.png";

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
  {
    id: 2,
    title: "AWS Cloud Practitioner - CLF02",
    issuer: "Amazon Web Services",
    insigne: InsigniaCloudPractitioner,
    date: "08-28-2026",
    credentialId: "1fb760bb-33ea-438b-9015-b25eebaf0b75",
    validUntil: "08-28-2029",
    status: "Ativo",
    link: "https://www.credly.com/badges/1fb760bb-33ea-438b-9015-b25eebaf0b75/public_url",
  },
  {
    id: 3,
    title: "AWS Application Networking Demonstrated",
    issuer: "Amazon Web Services",
    insigne: InsigniaAwsApplicationNetworkingDemonstrated,
    date: "09-09-2026",
    credentialId: "4d6231f6-46c4-4c14-bd2a-07663dcc0288",
    validUntil: "09-09-2027",
    status: "Ativo",
    link: "https://www.credly.com/badges/4d6231f6-46c4-4c14-bd2a-07663dcc0288/public_url",
  },
  {
    id: 4,
    title: "AWS Serverless Demonstrated",
    issuer: "Amazon Web Services",
    insigne: InsigniaAwsServerlessDemonstrated,
    date: "06-08-2026",
    credentialId: "f734c031-de2b-4b80-96e1-e90c5706edb7",
    validUntil: "06-08-2027",
    status: "Ativo",
    link: "https://www.credly.com/badges/f734c031-de2b-4b80-96e1-e90c5706edb7/public_url",
  },
  {
    id: 5,
    title: "AWS Incident Response Demonstrated",
    issuer: "Amazon Web Services",
    insigne: InsigniaAwsIncidentResponse,
    date: "09-11-2026",
    credentialId: "894d3ff8-8096-4e81-9a09-be4deca67a47",
    validUntil: "09-11-2027",
    status: "Ativo",
    link: "https://www.credly.com/badges/894d3ff8-8096-4e81-9a09-be4deca67a47/public_url",
  },
  {
    id: 6,
    title: "AWS Data Lakehouse Demonstrated",
    issuer: "Amazon Web Services",
    insigne: InsigniaAwsDataLakehouse,
    date: "09-14-2026",
    credentialId: "cdc70d28-2082-46b7-9584-59dd7c1bae74",
    validUntil: "09-14-2027",
    status: "Ativo",
    link: "https://www.credly.com/badges/cdc70d28-2082-46b7-9584-59dd7c1bae74/public_url",
  },
];

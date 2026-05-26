import Frequencia from "../assets/Projects/Frequencia.png";
import Carcara from "../assets/Projects/Carcara.png";
import ELI from "../assets/Projects/ELI.png";
import UfersaDev from "../assets/Projects/UfersaDev.png";
import Rebeca from "../assets/Projects/Rebeca.png"; // <-- Adicionado
import VoluntariosLeitura from "../assets/Projects/VoluntariosLeitura.png"; // <-- Adicionado

export const ProjectsInfo = [
  {
    id: 1,
    title: "Frequência Acadêmica - UFERSA",
    shortDescription: "Aplicativo para controle de frequência acadêmica",
    description: [
      "Sistema web desenvolvido para automatizar o processo de registro de frequência de bolsistas acadêmicos na UFERSA.",
      "A aplicação permite que bolsistas registrem, acompanhem e validem mensalmente suas atividades de forma simples, segura e eficiente, <strong>otimizando o controle das bolsas institucionais e reduzindo a burocracia</strong>.",
      "O software foi oficialmente registrado no <strong>Instituto Nacional da Propriedade Industrial (INPI)</strong>, garantindo a proteção de sua propriedade intelectual.",
      "<strong>Lançado na Google Play Store em 4 de abril de 2025</strong>, o aplicativo agora está disponível para dispositivos Android, ampliando seu alcance e acessibilidade.",
      "Idealizado para <strong>facilitar a gestão e o acompanhamento das atividades acadêmicas</strong>.",
    ],
    image: Frequencia,
    stacks: ["React", "Tailwind CSS"],
    authors: ["José Danilo", "Prof. Walber José"],
    sourceCode: false,
    url: "https://www.frequencia-academica.ufersa.dev.br",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=br.dev.ufersa.frequencia_academica.www.twa",
  },
  {
    id: 2,
    title: "Landing page - Projeto Carcará",
    shortDescription: "Página institucional do Projeto Carcará",
    description: [
      "Landing page desenvolvida para o <strong>Projeto Carcará da UFERSA</strong>, com o objetivo de apresentar o projeto, seus objetivos e membros envolvidos.",
      "A página contém <strong>informações institucionais, seções descritivas e design responsivo</strong> para diferentes dispositivos.",
      "Foi desenvolvida com foco em <strong>acessibilidade e performance</strong>, servindo como canal de comunicação oficial do projeto.",
    ],
    image: Carcara,
    sourceCode: false,
    stacks: ["React", "Tailwind CSS"],
    authors: ["José Danilo", "Yuri Nascimento"],
    linkRepositorio: "https://github.com/JoseDaniloS/Landing-page-Carcara",
    url: "https://carcara.ufersa.dev.br",
  },
  {
    id: 3,
    title: "Portal de Notícias - ELI",
    shortDescription:
      "Portal informativo do Ecossistema Local de Inovação de Pau dos Ferros",
    description: [
      "Desenvolvido para o <strong>Ecossistema Local de Inovação (ELI) de Pau dos Ferros</strong>, este portal tem como objetivo divulgar ações, eventos, notícias e oportunidades relacionadas à inovação, empreendedorismo e tecnologia na região.",
      "A plataforma <strong>centraliza as informações do ecossistema</strong>, promovendo visibilidade às iniciativas locais e fortalecendo a conexão entre instituições, startups, pesquisadores e a comunidade em geral.",
      "O portal é de <strong>fácil navegação, responsivo e gerenciado por meio de uma interface administrativa simples e intuitiva</strong>.",
    ],
    image: ELI,
    sourceCode: false,
    stacks: ["React", "Tailwind CSS"],
    authors: ["José Danilo", "Yuri Nascimento"],
    linkRepositorio: "https://github.com/JoseDaniloS/ELI-FrontEnd",
    url: "https://eli.ufersa.dev.br",
  },
  {
    id: 4,
    title: "UFERSA DEV",
    shortDescription: "Portal para desenvolvedores da UFERSA",
    description: [
      "Plataforma criada para a <strong>comunidade de desenvolvedores da UFERSA</strong>, centralizando projetos, recursos e oportunidades para alunos e colaboradores.",
      "O portal oferece <strong>conteúdo atualizado, seções de notícias e integração com ferramentas de versionamento</strong>, além de um design responsivo e moderno.",
      "O objetivo é <strong>fortalecer a cultura de desenvolvimento dentro da universidade e promover a troca de conhecimento</strong>.",
    ],
    image: UfersaDev,
    stacks: ["React", "Tailwind CSS"],
    authors: ["José Danilo"],
    sourceCode: false,
    url: "https://ufersa.dev.br",
  },
  {
    id: 5,
    title: "Portal de Notícias - REBECA",
    shortDescription: "Portal de comunicação e notícias do projeto REBECA",
    description: [
      "Plataforma de comunicação digital projetada para centralizar a publicação de notícias, artigos institucionais e novidades do <strong>projeto REBECA</strong>.",
      "Desenvolvido com uma arquitetura moderna que integra o <strong>Strapi como CMS Headless no back-end</strong>, garantindo uma gestão de conteúdo flexível e robusta para a equipe editorial.",
      "Infraestrutura de deployment automatizada via pipeline de CI/CD utilizando um <strong>GitHub Actions Runner auto-hospedado</strong>, configurado especificamente para transpor as restrições e políticas de segurança do <strong>firewall da USP</strong>.",
      "Ambiente de produção totalmente conteinerizado com <strong>Docker</strong>, utilizando o <strong>Nginx como proxy reverso</strong> para gerenciamento de tráfego, segurança e entrega de alta performance.",
    ],
    image: Rebeca,
    stacks: [
      "React",
      "Tailwind CSS",
      "Strapi",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    authors: ["José Danilo"],
    sourceCode: false,
    url: "https://redenacionalrebeca.icmc.usp.br", // Ajuste a URL se necessário
  },
  {
    id: 6,
    title: "Voluntários da Leitura",
    shortDescription: "Plataforma de incentivo e gestão de projetos de leitura",
    description: [
      "Sistema voltado para a organização, engajamento e acompanhamento de ações ligadas ao projeto <strong>Voluntários da Leitura</strong>.",
      "Front-end moderno e de alta disponibilidade publicado e distribuído globalmente através do <strong>AWS Amplify</strong>.",
      "Back-end robusto estruturado com o <strong>Strapi CMS</strong>, utilizando o <strong>Amazon ECR (Elastic Container Registry)</strong> para o gerenciamento das imagens de contêineres e distribuído sob um <strong>Application Load Balancer (ALB)</strong> para alta disponibilidade e escalabilidade.",
      "Persistência de dados configurada de forma isolada e segura através do <strong>Amazon RDS</strong> como banco de dados relacional e roteamento de tráfego inteligente gerenciado pelo <strong>AWS Route 53</strong>.",
    ],
    image: VoluntariosLeitura,
    stacks: [
      "React",
      "Tailwind CSS",
      "Strapi",
      "AWS Amplify",
      "AWS Route 53",
      "Amazon ECR",
      "Amazon RDS",
      "Elastic Load Balancing",
    ],
    authors: ["José Danilo"],
    sourceCode: false,
    url: "https://voluntariosdaleitura.ufersa.dev.br", // Ajuste a URL se necessário
  },
];

import Frequencia from "../assets/Projects/Frequencia.png";
import Carcara from "../assets/Projects/Carcara.png";
import ELI from "../assets/Projects/ELI.png";
import UfersaDev from "../assets/Projects/UfersaDev.png";
import LocalizaMartins from "../assets/Projects/LocalizaMartins.png";

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
    title: "LocalizaMartins",
    shortDescription: "Plataforma de localização e comércio local",
    description: [
      "Aplicação desenvolvida para auxiliar na <strong>localização de comércios e serviços na cidade de Martins/RN</strong>, permitindo que os usuários encontrem facilmente lojas, restaurantes e pontos turísticos.",
      "O sistema oferece <strong>busca filtrada, integração com mapas e informações detalhadas sobre cada estabelecimento</strong>.",
      "Com um design moderno e responsivo, a plataforma contribui para o <strong>fortalecimento do comércio local e incentivo ao turismo</strong>.",
      "Possui <strong>integração com o Mercado Pago</strong>, permitindo que os usuários realizem <strong>compras e pagamentos diretamente dentro do aplicativo</strong> para uma experiência completa e segura.",
    ],

    image: LocalizaMartins,
    stacks: ["React", "Tailwind CSS"],
    authors: ["José Danilo"],
    sourceCode: false,
    url: "https://www.localizamartins.ufersa.dev.br/home",
  },
];

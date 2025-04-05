import Frequencia from "../assets/Projects/Frequencia.png";
import Carcara from "../assets/Projects/Carcara.png";
import ELI from "../assets/Projects/ELI.png";
import CRUD_WEB from "../assets/Projects/CRUD_WEB.png";
import WeatherApp from "../assets/Projects/WeatherApp.png";

export const ProjectsInfo = [
    {
        id: 1,
        title: "Frequência Acadêmica - UFERSA",
        shortDescription: "Aplicativo para controle de frequência acadêmica",
        description: [
            "Sistema web desenvolvido para automatizar o processo de registro de frequência de bolsistas acadêmicos na UFERSA.",
            "A aplicação permite que bolsistas registrem, acompanhem e validem mensalmente suas atividades de forma simples, segura e eficiente.",
            "Idealizado para reduzir a burocracia e otimizar o controle das bolsas institucionais."
        ],
        image: Frequencia,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo", "Prof. Walber José"],
        sourceCode: false,
        url: "https://www.frequencia-academica.ufersa.dev.br",
    },
    {
        id: 2,
        title: "Landing page - Projeto Carcará",
        shortDescription: "Página institucional do Projeto Carcará",
        description: [
            "Landing page desenvolvida para o Projeto Carcará da UFERSA, com o objetivo de apresentar o projeto, seus objetivos e membros envolvidos.",
            "A página contém informações institucionais, seções descritivas e design responsivo para diferentes dispositivos.",
            "Foi desenvolvida com foco em acessibilidade e performance, servindo como canal de comunicação oficial do projeto."
        ],
        image: Carcara,
        sourceCode: false,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo"],
        linkRepositorio: "https://example.com/project2",
        url: "https://carcara.ufersa.dev.br",
    },
    {
        id: 3,
        title: "Portal de Notícias - ELI",
        shortDescription: "Portal informativo do Ecossistema Local de Inovação de Pau dos Ferros",
        description: [
            "Desenvolvido para o Ecossistema Local de Inovação (ELI) de Pau dos Ferros, este portal tem como objetivo divulgar ações, eventos, notícias e oportunidades relacionadas à inovação, empreendedorismo e tecnologia na região.",
            "A plataforma centraliza as informações do ecossistema, promovendo visibilidade às iniciativas locais e fortalecendo a conexão entre instituições, startups, pesquisadores e a comunidade em geral.",
            "O portal é de fácil navegação, responsivo e gerenciado por meio de uma interface administrativa simples e intuitiva."
        ],
        image: ELI,
        sourceCode: false,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo"],
        linkRepositorio: "https://example.com/project3",
        url: "https://eli.ufersa.dev.br",
    },
    {
        id: 4,
        title: "CRUD Web Completo",
        shortDescription: "Aplicação fullstack para gerenciamento de dados",
        description: [
            "Projeto CRUD completo desenvolvido com React no front-end e Express.js no back-end, utilizando MongoDB como banco de dados.",
            "A aplicação permite criar, visualizar, editar e excluir registros, sendo ideal para fins educacionais e demonstrações de integração entre frontend e backend.",
            "Design moderno, responsivo e funcional, com deploy realizado no Vercel e renderização eficiente."
        ],
        image: CRUD_WEB,
        sourceCode: true,
        stacks: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
        authors: ["José Danilo"],
        linkRepositorio: "https://github.com/JoseDaniloS/CRUD-API-Web",
        linkRepositorioAPI: "https://github.com/JoseDaniloS/CRUD-API",
        url: "https://crud-web-theta.vercel.app"
    },
    {
        id: 5,
        title: "Weather App",
        shortDescription: "Aplicativo para consulta do clima em tempo real",
        description: [
        "Aplicação web desenvolvida com React e Tailwind CSS que permite ao usuário consultar as condições climáticas de qualquer cidade em tempo real.",
        "Utiliza a API OpenWeather para fornecer informações como temperatura, sensação térmica, umidade e descrição do tempo.",
        "O design é responsivo e otimizado para diferentes dispositivos, proporcionando uma experiência fluida e acessível."
        ],
        image: WeatherApp,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo"],
        sourceCode: true,
        linkRepositorio: "https://github.com/JoseDaniloS/WeatherApp",
        url: "https://weather-app-pearl-gamma-18.vercel.app"
        }
];


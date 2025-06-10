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
            "A aplicação permite que bolsistas registrem, acompanhem e validem mensalmente suas atividades de forma simples, segura e eficiente, <strong>otimizando o controle das bolsas institucionais e reduzindo a burocracia</strong>.",
            "O software foi oficialmente registrado no <strong>Instituto Nacional da Propriedade Industrial (INPI)</strong>, garantindo a proteção de sua propriedade intelectual.",
            "<strong>Lançado na Google Play Store em 4 de abril de 2025</strong>, o aplicativo agora está disponível para dispositivos Android, ampliando seu alcance e acessibilidade.",
            "Idealizado para <strong>facilitar a gestão e o acompanhamento das atividades acadêmicas</strong>."
        ],
        image: Frequencia,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo", "Prof. Walber José"],
        sourceCode: false,
        url: "https://www.frequencia-academica.ufersa.dev.br",
        playStoreUrl: "https://play.google.com/store/apps/details?id=br.dev.ufersa.frequencia_academica.www.twa",
    },
    {
        id: 2,
        title: "Landing page - Projeto Carcará",
        shortDescription: "Página institucional do Projeto Carcará",
        description: [
            "Landing page desenvolvida para o <strong>Projeto Carcará da UFERSA</strong>, com o objetivo de apresentar o projeto, seus objetivos e membros envolvidos.",
            "A página contém <strong>informações institucionais, seções descritivas e design responsivo</strong> para diferentes dispositivos.",
            "Foi desenvolvida com foco em <strong>acessibilidade e performance</strong>, servindo como canal de comunicação oficial do projeto."
        ],
        image: Carcara,
        sourceCode: false,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo", "Yuri Nascimento"],
        // A propriedade linkRepositorio foi removida aqui, pois você marcou 'sourceCode: false'.
        // Se ela for necessária para exibir algo, você precisará adicionar um link fictício ou real.
        linkRepositorio: "https://github.com/JoseDaniloS/Landing-page-Carcara", // Exemplo de um link real, se existir.
        url: "https://carcara.ufersa.dev.br",
    },
    {
        id: 3,
        title: "Portal de Notícias - ELI",
        shortDescription: "Portal informativo do Ecossistema Local de Inovação de Pau dos Ferros",
        description: [
            "Desenvolvido para o <strong>Ecossistema Local de Inovação (ELI) de Pau dos Ferros</strong>, este portal tem como objetivo divulgar ações, eventos, notícias e oportunidades relacionadas à inovação, empreendedorismo e tecnologia na região.",
            "A plataforma <strong>centraliza as informações do ecossistema</strong>, promovendo visibilidade às iniciativas locais e fortalecendo a conexão entre instituições, startups, pesquisadores e a comunidade em geral.",
            "O portal é de <strong>fácil navegação, responsivo e gerenciado por meio de uma interface administrativa simples e intuitiva</strong>."
        ],
        image: ELI,
        sourceCode: false,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo", "Yuri Nascimento"],
        // A propriedade linkRepositorio foi removida aqui, pois você marcou 'sourceCode: false'.
        linkRepositorio: "https://github.com/JoseDaniloS/ELI-FrontEnd", // Exemplo de um link real, se existir.
        url: "https://eli.ufersa.dev.br",
    },
    {
        id: 4,
        title: "CRUD Web Completo",
        shortDescription: "Aplicação fullstack para gerenciamento de dados",
        description: [
            "Projeto CRUD completo desenvolvido com <strong>React no front-end e Express.js no back-end</strong>, utilizando <strong>MongoDB</strong> como banco de dados.",
            "A aplicação permite <strong>criar, visualizar, editar e excluir registros</strong>, sendo ideal para fins educacionais e demonstrações de integração entre frontend e backend.",
            "Design moderno, responsivo e funcional, com <strong>deploy realizado no Vercel e renderização eficiente</strong>."
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
            "Aplicação web desenvolvida com <strong>React e Tailwind CSS</strong> que permite ao usuário consultar as condições climáticas de qualquer cidade em tempo real.",
            "Utiliza a <strong>API OpenWeather</strong> para fornecer informações como temperatura, sensação térmica, umidade e descrição do tempo.",
            "O design é <strong>responsivo e otimizado para diferentes dispositivos</strong>, proporcionando uma experiência fluida e acessível."
        ],
        image: WeatherApp,
        stacks: ["React", "Tailwind CSS"],
        authors: ["José Danilo"],
        sourceCode: true,
        linkRepositorio: "https://github.com/JoseDaniloS/WeatherApp",
        url: "https://weather-app-pearl-gamma-18.vercel.app"
    }
];
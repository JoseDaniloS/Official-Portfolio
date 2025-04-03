import TitleSections from "../../../../components/TitleSections";
import About_MeImage from "/About_Me.webp";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="w-full min-h-screen max-xl:h-full flex flex-col items-center justify-around py-[40px] gap-20 bg-[#121212]"
    >
      <TitleSections text="Sobre mim" />
      <div className="h-full max-md:w-[90vw] md:w-[80%] max-md:flex-col text-[#999] flex  gap-6 md:gap-12">
        <div className="w-full md:w-5/6 flex flex-col gap-6 items-center text-left">
          <div className="flex flex-col gap-5 md:text-left">
          <h2 className="text-3xl text-white font-bold">
              Eu sou <span className="text-red-500">José Danilo</span>, um
              <strong> desenvolvedor front-end</strong>, CEO da
              <span className="text-red-500"> Chronos - Web Soluções</span> e
              pesquisador no projeto Carcará.
            </h2>
            <p>
              Sou apaixonado por <strong>desenvolvimento web</strong> e <strong>computação em nuvem</strong>,
              sempre buscando criar soluções inovadoras e eficientes.
              Atualmente, atuo como <strong>desenvolvedor front-end</strong> e líder da <strong>
                Chronos -
                Web Soluções
              </strong>, onde ajudo empresas e profissionais a transformar
              ideias em produtos digitais de alto impacto.
            </p>
            <p>
              Além disso, faço parte do <strong>projeto de pesquisa Carcará na UFERSA</strong>,
              onde contribuo para o desenvolvimento de sistemas que aprimoram a
              infraestrutura de TI e a experiência acadêmica.
            </p>
            <p>
              Meu foco está em desenvolver <strong>interfaces modernas, responsivas e de
              alta performance</strong>, utilizando tecnologias como <strong>React, Tailwind CSS
              e TypeScript</strong>. Acredito no aprendizado contínuo e na colaboração
              para criar produtos digitais que realmente fazem a diferença.
            </p>
          </div>
        </div>

        <PersonalInfo />
      </div>

      {/* Imagem e estatísticas */}
      <div className="flex flex-col text-white max-md:w-[90vw] md:w-[80%] gap-6">
        <img
          src={About_MeImage}
          alt="José Danilo - Desenvolvedor Front-end e CEO da Chronos - Web Soluções"
          loading="lazy"
          className=" max-xl:w-full xl:max-w-[600px] h-[400px] object-center object-cover rounded-lg"
        />
        <legend>Participação no Evento Start-up Day 22/03/2025</legend>
        {/* Estatísticas */}
        <div className="md:w-[80%] max-md:w-[90vw] max-md:flex-col flex  justify-center md:justify-between text-[42px] gap-6">
          <StatCard value="1+" label="Ano de Experiência" />
          <StatCard value="5+" label="Clientes Satisfeitos" />
          <StatCard value="6+" label="Projetos Realizados" />
        </div>
      </div>
    </div>
  );
}

// Componente de Estatística para evitar repetição
function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <span className="font-bold">
        {value}
      </span>
      <p className="text-[18px] text-[#999]">
        {label}
      </p>
    </div>
  );
}

function PersonalInfo() {
    const personalData = [
      { label: "Nome", value: "José Danilo" },
      {
        label: "Email",
        value: (
          <a
            className="text-red-500"
            href="mailto:danilojose.1d@gmail.com"
            aria-label="Enviar email para José Danilo"
          >
            danilojose.1d@gmail.com
          </a>
        ),
      },
      { label: "Idade", value: "20 anos" },
      { label: "De", value: "Pau dos Ferros, Rio Grande do Norte, Brasil" },
    ];
  
    return (
      <div className="flex flex-col gap-5 text-xl w-full md:w-auto">
        {personalData.map((item, index) => (
          <p key={index} className="border-b border-[#303030] py-2">
            <span className="font-bold text-white">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
    );
  }

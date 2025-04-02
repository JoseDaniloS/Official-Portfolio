import TitleSections from "../../../../components/TitleSections";
import About_MeImage from "/About_Me.jpg";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="w-full min-h-screen max-xl:h-full flex flex-col items-center justify-around py-[40px] gap-20 bg-[#121212]"
    >
      <TitleSections text="Sobre mim" />
      <div className="h-full max-md:w-[90vw] md:w-[80%] max-md:flex-col text-white flex  gap-6 md:gap-12">
        {/* Texto de apresentação */}
        <div className="w-full md:w-5/6 flex flex-col gap-6 items-center text-center md:text-left">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-3xl font-bold">
              Eu sou <span className="text-red-700">José Danilo,</span> um
              desenvolvedor front-end e engenheiro de software
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              enim sequi eveniet delectus inventore eos est illo nesciunt sed,
              veniam doloremque, distinctio officia corrupti ab voluptas at
              explicabo mollitia soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              enim sequi eveniet delectus inventore eos est illo nesciunt sed,
              veniam doloremque, distinctio officia corrupti ab voluptas at
              explicabo mollitia soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              enim sequi eveniet delectus inventore eos est illo nesciunt sed,
              veniam doloremque, distinctio officia corrupti ab voluptas at
              explicabo mollitia soluta.
            </p>
          </div>
        </div>

        {/* Informações pessoais */}
        <div className="flex flex-col gap-5 text-xl w-full md:w-auto">
          <p className="border-b border-[#303030] py-2">
            <span className="font-bold">Nome:</span> José Danilo
          </p>
          <p className="border-b border-[#303030] py-2">
            <span className="font-bold">Email: </span>
            <a
              className="text-red-700"
              href="mailto:danilojose.1d@gmail.com"
              aria-label="Enviar email para José Danilo"
            >
              danilojose.1d@gmail.com
            </a>
          </p>
          <p className="border-b border-[#303030] py-2">
            <span className="font-bold">Idade:</span> 20 anos
          </p>
          <p className="border-b border-[#303030] py-2">
            <span className="font-bold">De:</span> Pau dos Ferros, Rio Grande do
            Norte
          </p>
        </div>
      </div>

      {/* Imagem e estatísticas */}
      <div className="flex flex-col text-white max-md:w-[90vw] md:w-[80%] gap-6">
        <img
          src={About_MeImage}
          alt="Foto de José Danilo"
          className=" max-xl:w-full xl:max-w-[600px] h-[400px] object-center object-cover rounded-lg"
        />
        <div className="flex max-md:flex-col max-md:justify-center w-full text-[42px] gap-4">

          <div className="text-center p-6">
            <span aria-labelledby="anos-exp">4+</span>
            <p id="anos-exp" className="text-[18px] text-nowrap">
              Anos de Experiência
            </p>
          </div>

          <div className="border max-md:w-full border-[#303030]" />

          <div className="text-center p-6">
            <span aria-labelledby="clientes">5+</span>
            <p id="clientes" className="text-[18px] text-nowrap">
              Clientes Satisfeitos
            </p>
          </div>

          <div className="border max-md:w-full border-[#303030]" />

          <div className="text-center p-6">
            <span aria-labelledby="projetos">6+</span>
            <p id="projetos" className="text-[18px] text-nowrap">
              Projetos realizados
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

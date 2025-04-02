import { AnchorLinks } from "../../components/AnchorLinks";
import Github_Icon from "/Github_Icon.svg";
import Linkedin_Icon from "/Linkedin_Icon.svg";
import Instagram_Icon from "/Instagram_Icon.svg";

import Danilo from "/Danilo.png";

export default function Aside() {
  const menuItems = [
    { name: "Início", href: "home" },
    { name: "Sobre mim", href: "about" },
    { name: "Experiência", href: "experience" },
    { name: "Projetos", href: "projects" },
    { name: "Feedbacks", href: "reviews" },
    { name: "Contato", href: "contact" }
  ];

  const iconeLinks = [
    {
      src: Github_Icon,
      alt: "Icone de Link para o Github",
      href: "https://github.com/JoseDaniloS"
    },
    {
      src: Linkedin_Icon,
      alt: "Icone de Link para o Linkedin",
      href: "https://www.linkedin.com/in/josedanilos/"
    },
    {
      src: Instagram_Icon,
      alt: "Icone de Link para o Instagram",
      href: "https://www.instagram.com/jdanilos_/"
    }
  ];
  return (
    <div className="w-1/5 max-lg:hidden h-screen fixed left-0 text-[#FFFFFFDE] bg-[#0E0E0E] flex flex-col justify-around items-center">
      {/* Foto de Perfil */}
      <div className="w-full h-1/2 flex flex-col justify-center items-center p-10 gap-[10px]">
        <img src={Danilo} alt="Foto de Perfil José Danilo" />
        <h1 className="text-2xl font-extrabold">José Danilo</h1>
      </div>

      {/* Menu de Navegação */}
      <div className="h-full flex flex-col gap-14">
        <AnchorLinks menuItems={menuItems} />
        <button className="bg-red-800 hover:bg-red-700 font-bold py-2 px-10 rounded-[20px] cursor-pointer transition-all">
          Enviar Mensagem
        </button>
      </div>

      {/* Redes Sociais */}
      <div className="w-full flex justify-center gap-[20px] items-center py-2">
        {iconeLinks.map((link, index) =>
          <a
            href={link.href}
            className="hover:scale-125 transition-all duration-300 focus:outline-none"
            key={index}
          >
            <img src={link.src} alt={link.alt} loading="lazy" className="w-6" />
          </a>
        )}
      </div>
    </div>
  );
}

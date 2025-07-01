import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import Danilo from "/Danilo.webp";
import { AnchorLinks } from "../../components/Global/AnchorLinks";
import { useEffect, useState } from "react";

export default function Aside() {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Início", href: "home" },
    { name: "Sobre mim", href: "about" },
    { name: "Experiência", href: "experience" },
    { name: "Projetos", href: "projects" },
    { name: "Feedbacks", href: "reviews" },
    { name: "Contato", href: "contact" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.some(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    menuItems.forEach(item => {
      const element = document.getElementById(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const iconeLinks = [
    {
      icon: FaGithub,
      alt: "GitHub",
      href: "https://github.com/JoseDaniloS",
      
    },
    {
      icon: FaLinkedin,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/josedanilos/",
      
    },
    {
      icon: FaInstagram,
      alt: "Instagram",
      href: "https://www.instagram.com/jdanilos_/",
    }
  ];

  return (
    <div className="w-1/5 max-lg:hidden h-full overflow-auto fixed left-0 text-[#FFFFFFDE] bg-[#00000070]  flex flex-col justify-around items-center">
      {/* Foto de Perfil */}
      <div className="w-full h-1/2 flex flex-col justify-center items-center p-10 gap-[10px]">
        <img src={Danilo} alt="Foto de Perfil José Danilo" loading="lazy" />
        <h1 className="text-2xl font-extrabold">José Danilo</h1>
      </div>

      {/* Menu de Navegação */}
      <div className="h-full w-2/4 text-center mb-2 flex flex-col gap-14">
        <AnchorLinks activeSection={activeSection} menuItems={menuItems} />
        <a
          href="https://wa.link/vu7mlc"
          aria-label="Enviar mensagem para José Danilo pelo WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-red-button font-bold py-2 w-full rounded-[20px] cursor-pointer transition-all"
        >
          Enviar Mensagem
        </a>
      </div>

      {/* Redes Sociais */}
      <div className="w-full flex justify-center gap-[20px] items-center py-2">
        {iconeLinks.map(({ icon: Icon, alt, href}) =>
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className="transition-transform hover:scale-110"
          >
            <Icon
              size={28}
              className="text-neon-red hover:text-white transition-colors drop-shadow-[0_0_10px_#FF3D3D]"
            />
          </a>
        )}
      </div>
    </div>
  );
}

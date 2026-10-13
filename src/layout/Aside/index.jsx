import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Danilo from "/Danilo.webp";
import { AnchorLinks } from "../../components/Global/AnchorLinks";
import { menuItems } from "../../database/menuIcons";
import { useActiveSection } from "../../hooks/useActiveSection";
import { EASE_OUT } from "../../utils/functions";

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
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function Aside() {
  const activeSection = useActiveSection(menuItems);

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-1/5 max-lg:hidden h-full overflow-auto fixed p-3 left-0 text-[#FFFFFFDE] bg-[#00000070] backdrop-blur-sm border-r border-white/5 flex flex-col justify-around items-center"
    >
      {/* Foto de Perfil */}
      <motion.div
        variants={item}
        className="w-full h-1/2 flex flex-col justify-center items-center p-10 gap-[10px]"
      >
        <div className="relative group">
          <div className="absolute inset-[15%] rounded-full bg-[#FF1744] opacity-25 blur-3xl animate-pulse" />
          <img
            src={Danilo}
            alt="Foto de Perfil José Danilo"
            loading="lazy"
            className="relative transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1"
          />
        </div>
        <h1 className="text-2xl font-extrabold">José Danilo</h1>
        <p className="font-mono text-xs text-white/60 text-center">
          Full-Stack · AWS Serverless
        </p>
        <span className="flex items-center gap-2 text-xs text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Disponível para projetos
        </span>
      </motion.div>

      {/* Menu de Navegação */}
      <motion.div
        variants={item}
        className="h-full w-3/4 text-center mb-2 flex flex-col gap-14"
      >
        <AnchorLinks
          activeSection={activeSection}
          menuItems={menuItems}
          layoutId="aside-nav"
          itemVariants={item}
        />
        <a
          href="https://wa.link/vu7mlc"
          aria-label="Enviar mensagem para José Danilo pelo WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-red-button font-bold py-2 w-full rounded-[20px] cursor-pointer transition-all hover:-translate-y-0.5"
        >
          Enviar Mensagem
        </a>
      </motion.div>

      {/* Redes Sociais */}
      <motion.div
        variants={item}
        className="w-full flex justify-center gap-[20px] items-center py-2"
      >
        {iconeLinks.map(({ icon: Icon, alt, href }) => (
          <motion.a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            whileHover={{ y: -4, scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              size={28}
              className="text-neon-red hover:text-white transition-colors drop-shadow-[0_0_10px_#FF3D3D]"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.aside>
  );
}

import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { motionConfig } from "../../../../../utils/functions";

const socialLinks = [
  {
    href: "https://wa.link/vu7mlc",
    icon: FaWhatsapp,
    label: "WhatsApp",
    
  },
  {
    href: "mailto:danilojose.1d@gmail.com",
    icon: FaEnvelope,
    label: "Gmail",
    
  },
  {
    href: "https://www.linkedin.com/in/josedanilos/",
    icon: FaLinkedin,
    label: "LinkedIn",
    
  },
];


export default function SocialLinks() {
  return (
    <motion.div
      {...motionConfig}
      className="flex md:w-[80%] max-md:w-[90vw] gap-10 max-md:gap-0 max-md:justify-around"
    >
      {socialLinks.map((link, index) =>
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col group items-center hover:scale-105 p-3 gap-3 font-semibold transition `}
          aria-label={link.alt}
        >
         <link.icon size={48} className="text-neon-red group-hover:text-neon-red-hover transition-colors group-hover:drop-shadow-[0_0_10px_#FF3D3D]" />

          <p className="text-nowrap group-hover:text-neon-red-hover group-hover:text-shadow-lg text-shadow-neon-red">
            {link.label}
          </p>
        </a>
      )}
    </motion.div>
  );
}

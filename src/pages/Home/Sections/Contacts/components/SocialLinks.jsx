import Whatsapp from "/icons8-whatsapp.svg";
import Gmail from "/icons8-gmail.svg";
import Linkedin from "/icons8-linkedin.svg";
import { motion } from "motion/react";

const socialLinks = [
  {
    href: "https://wa.link/xlj5un",
    img: Whatsapp,
    alt: "WhatsApp",
    label: "+55 88 981590085",
    color: "hover:text-green-400"
  },
  {
    href: "mailto:danilojose.1d@gmail.com",
    img: Gmail,
    alt: "E-mail",
    label: "danilojose.1d@gmail.com",
    color: "hover:text-blue-400"
  },
  {
    href: "https://www.linkedin.com/in/josedanilos/",
    img: Linkedin,
    alt: "LinkedIn",
    label: "@josedanilos",
    color: "hover:text-gray-400"
  }
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // só anima uma vez, quando 20% do elemento estiver visível
      transition={{ duration: 0.5 }}
      className="flex md:w-[80%] max-md:w-[90vw] flex-wrap gap-10"
    >
      {socialLinks.map((link, index) =>
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center p-3 gap-3 text-white font-semibold transition ${link.color}`}
          aria-label={link.alt}
        >
          <img src={link.img} alt={link.alt} className="w-16 h-16" />
          <p>
            {link.label}
          </p>
        </a>
      )}
    </motion.div>
  );
}

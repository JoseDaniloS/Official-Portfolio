import Whatsapp from "/icons8-whatsapp.svg";
import Gmail from "/icons8-gmail.svg";
import Linkedin from "/icons8-linkedin.svg";
import { motion } from "motion/react";
import { motionConfig } from "../../../../../utils/functions";

const socialLinks = [
  {
    href: "https://wa.link/vu7mlc",
    img: Whatsapp,
    alt: "WhatsApp",
    label: "WhatsApp",
    color: "hover:text-green-400"
  },
  {
    href: "mailto:danilojose.1d@gmail.com",
    img: Gmail,
    alt: "E-mail",
    label: "Gmail",
    color: "hover:text-blue-400"
  },
  {
    href: "https://www.linkedin.com/in/josedanilos/",
    img: Linkedin,
    alt: "LinkedIn",
    label: "LinkedIn",
    color: "hover:text-gray-400"
  }
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
          className={`flex flex-col items-center p-3 gap-3 text-white font-semibold transition ${link.color}`}
          aria-label={link.alt}
        >
          <img src={link.img} alt={link.alt} className="max-md:w-2/4 max-md:h-2/4 h-2/4" />
          <p className="text-nowrap">
            {link.label}
          </p>
        </a>
      )}
    </motion.div>
  );
}

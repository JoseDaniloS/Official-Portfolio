import { motion } from "motion/react";

import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import { motionConfig } from "../../../../utils/functions";
import TitleSections from "../../../../components/Global/TitleSections";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 gap-10 px-6 text-white"
    >
      <TitleSections text="Contato" />

      <motion.p
        {...motionConfig}
        className="text-3xl text-[#bbb] font-bold md:w-[80%] max-md:w-[90vw] max-md:text-2xl"
      >
        Estou disponível para colaborações e novos desafios! Entre em contato
        pelo formulário ou redes sociais abaixo.
      </motion.p>

      {/* Redes sociais */}
      <SocialLinks />

      {/* Formulário */}
      <ContactForm />
    </div>
  );
}

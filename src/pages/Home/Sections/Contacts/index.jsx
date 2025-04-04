import { motion } from "motion/react";
import TitleSections from "../../../../components/TitleSections";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#121212] py-20 gap-10 px-6 text-white"
    >
      <TitleSections text="Contato" />

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }} // só anima uma vez, quando 20% do elemento estiver visível
        transition={{ duration: 0.8 }}
        className="text-3xl text-[#bbb] font-bold md:w-[80%] max-md:w-[90vw] mb-10"
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

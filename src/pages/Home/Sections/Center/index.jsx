import { motion } from "motion/react";
import { motionConfig, scrollToSection } from "../../../../utils/functions";

export default function Center() {
  return (
    <section
      id="home"
      className="w-full relative h-dvh flex max-lg:mt-[88px] flex-col gap-10 text-white justify-center items-center"
    >

      <motion.div
        {...motionConfig}
        className="flex relative text-[#999] max-md:w-[90vw] font-bold flex-col max-w-[800px] justify-center items-center gap-2 text-center"
      >
        <h1 className="text-3xl max-md:text-2x">Bem-vindo</h1>
        <h2 className="text-5xl max-md:text-4xl">
          <span className="text-white text-shadow-neon-red text-shadow-lg">Dev. Front-End</span> && CEO da Chronos - Web Soluções
        </h2>
      </motion.div>

      <motion.button
        {...motionConfig}
        onClick={() => {scrollToSection("contact");}}
        className="py-3 relative font-semibold neon-red-button px-8 rounded-4xl cursor-pointer transition-all duration-300 hover:scale-110"
      >
        Entre em contato
      </motion.button>
    </section>
  );
}
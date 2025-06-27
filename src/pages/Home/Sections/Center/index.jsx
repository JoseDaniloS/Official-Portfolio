import { motion } from "motion/react";
import { motionConfig, scrollToSection } from "../../../../utils/functions";

export default function Center() {
  return (
    <section
      id="home"
      className="w-full relative h-dvh flex max-lg:mt-[88px] flex-col gap-10 justify-center items-center"
    >

      <motion.div
        {...motionConfig}
        className="flex relative text-[#ccc] max-md:w-[90vw] font-bold flex-col max-w-[800px] justify-center items-center gap-2 text-center"
      >
        <h1 className="text-3xl max-md:text-2x"> Seja bem-vindo ao</h1>
        <h2 className="text-5xl max-md:text-4xl">
          Portfolio de
          <i className="text-white text-shadow-neon-red text-shadow-lg"> José Danilo</i>
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
import { motion, AnimatePresence } from "framer-motion"; // Use framer-motion, não motion/react
import { useState, useEffect } from "react";
import { motionConfig, scrollToSection } from "../../../../utils/functions";
import Danilo from "/Danilo.webp";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import { FaCode, FaMugSaucer } from "react-icons/fa6";

// Array de palavras para alternar
const changingWords = ["FUTURO", "MUNDO", "UNIVERSO"];

// Configurações de animação para as palavras que trocam
const wordVariants = {
  initial: { y: 20, opacity: 0, scale: 0.9 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: -20, opacity: 0, scale: 0.9 }
};

export default function Center() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // useEffect para mudar a palavra a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % changingWords.length);
    }, 3000); // Troca a palavra a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <section
      id="home"
      className="w-full relative h-dvh flex max-lg:mt-[88px] flex-col gap-10 justify-center items-center"
    >
      <motion.div
        {...motionConfig}
        className="flex relative text-white max-md:w-[90vw] font-bold flex-col max-w-[800px] justify-center items-center gap-2 text-center"
      >
        <img src={Danilo} alt="Foto de José Danilo" className="lg:hidden" />
        {/* Subtítulo de Apresentação */}
        <h2 className="text-2xl max-md:text-md mt-4 font-normal">
          Sou <TextRedShadow>José Danilo</TextRedShadow>
          , Desenvolvedor Front End.
        </h2>

        {/* Título Principal: "Construindo o futuro" com a palavra animada em destaque */}
        <h1 className="text-3xl max-md:text-md">
          Transformando o{" "}
          <span className="relative inline-flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={changingWords[currentWordIndex]} // A 'key' é crucial
                variants={wordVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", stiffness: 560, damping: 20 }}
                className="inline-block text-neon-red text-shadow-[#444] text-shadow-lg" // Classes de destaque aplicadas aqui
              >
                {changingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          com <FaCode className="inline" aria-hidden="true" /> e{" "}
          <FaMugSaucer className="inline" aria-hidden="true" />.
        </h1>
      </motion.div>

      <motion.button
        {...motionConfig}
        onClick={() => {
          scrollToSection("contact");
        }}
        className="py-3 relative font-semibold neon-red-button px-8 rounded-4xl cursor-pointer transition-all duration-300 hover:scale-110"
      >
        Entre em contato
      </motion.button>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { EASE_OUT, scrollToSection } from "../../../../utils/functions";
import Danilo from "/Danilo.webp";
import TextRedShadow from "../../../../components/Global/TextRedShadow";

// Palavras que alternam no título
const changingWords = ["ESCALÁVEIS", "SERVERLESS", "RESILIENTES", "SEGUROS"];

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "AWS Lambda",
  "API Gateway",
  "DynamoDB",
  "SNS · SQS",
  "AWS SAM",
  "Docker",
  "GitHub Actions",
];

const wordVariants = {
  initial: { y: "100%", opacity: 0, filter: "blur(6px)" },
  animate: { y: "0%", opacity: 1, filter: "blur(0px)" },
  exit: { y: "-100%", opacity: 0, filter: "blur(6px)" },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export default function Center() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full relative min-h-dvh flex max-lg:pt-[88px] flex-col justify-center items-center py-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex relative text-white max-md:w-[90vw] flex-col max-w-[900px] justify-center items-center gap-6 text-center"
      >
        <motion.img
          variants={item}
          src={Danilo}
          alt="Foto de José Danilo"
          className="lg:hidden w-56"
        />

        <motion.span
          variants={item}
          className="font-mono text-sm text-white/70 border border-[#FF1744]/40 bg-black/40 backdrop-blur-sm rounded-full px-4 py-1.5"
        >
          <span className="text-neon-red">~$</span> whoami
        </motion.span>

        <motion.h1
          variants={item}
          className="text-6xl max-md:text-4xl font-extrabold tracking-tight"
        >
          José <TextRedShadow>Danilo</TextRedShadow>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl max-md:text-base text-white/80 font-medium"
        >
          Desenvolvedor Full-Stack & Tech Lead · Infraestrutura AWS Serverless
        </motion.p>

        <motion.h2
          variants={item}
          className="text-3xl max-md:text-xl font-bold flex flex-wrap justify-center items-baseline gap-x-3"
        >
          <span>Construindo sistemas</span>
          <span className="relative inline-flex overflow-hidden h-[1.25em] min-w-[7ch] justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={changingWords[currentWordIndex]}
                variants={wordVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.45, ease: EASE_OUT }}
                className="inline-block text-neon-red drop-shadow-[0_0_12px_#FF174488]"
              >
                {changingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>na nuvem.</span>
        </motion.h2>

        <motion.ul
          variants={item}
          className="flex flex-wrap justify-center gap-2 max-w-[720px]"
          aria-label="Principais tecnologias"
        >
          {stack.map((tech, i) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.05, ease: EASE_OUT }}
              className="font-mono text-xs px-3 py-1 rounded-md border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm hover:border-[#FF1744]/60 hover:text-white transition-colors"
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("contact")}
            className="py-3 font-semibold neon-red-button px-8 rounded-4xl cursor-pointer"
          >
            Entre em contato
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("projects")}
            className="py-3 font-semibold px-8 rounded-4xl cursor-pointer border border-white/30 bg-white/5 backdrop-blur-sm hover:border-white transition-colors"
          >
            Ver projetos
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        aria-label="Rolar para a seção Sobre mim"
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.6 },
          y: { delay: 2, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 max-md:hidden text-white/60 hover:text-white cursor-pointer"
      >
        <FaArrowDown size={20} />
      </motion.button>
    </section>
  );
}

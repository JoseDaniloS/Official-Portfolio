import { motion } from "framer-motion";
import TextRedShadow from "./TextRedShadow";
import { EASE_OUT } from "../../utils/functions";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const letter = {
  hidden: { opacity: 0, y: "100%", rotateX: -90 },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export default function TitleSections({ text, label }) {
  return (
    <motion.div
      className="py-4 flex flex-col items-center gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {label && (
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="font-mono text-sm text-neon-red tracking-widest"
        >
          {label}
        </motion.span>
      )}

      <TextRedShadow className="text-nowrap uppercase text-8xl max-xl:text-5xl font-extrabold">
        <motion.span
          variants={container}
          aria-label={text}
          className="inline-flex [perspective:600px]"
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              aria-hidden="true"
              className="inline-block origin-bottom"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.span>
      </TextRedShadow>

      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.8, delay: 0.3, ease: EASE_OUT },
          },
        }}
        className="h-[3px] w-32 neon-red-button rounded-full origin-center"
      />
    </motion.div>
  );
}

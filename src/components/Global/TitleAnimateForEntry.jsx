import { AnimatePresence, motion } from "motion/react";

export default function TitleAnimateForEntry({showContent}) {
  return (
    <AnimatePresence>
      {!showContent &&
        <motion.div
          className="w-full h-dvh absolute z-50 flex justify-center bg-[#0E0E0E] items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.7, y: 20, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl font-bold text-white tracking-widest"
          >
            {"<J/D>"}
          </motion.h1>
        </motion.div>}
    </AnimatePresence>
  );
}

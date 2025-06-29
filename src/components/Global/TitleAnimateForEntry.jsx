import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useState, useEffect } from "react";

// Componente para exibir a mensagem de "Carregando"
function LoadingFallback() {
  const [dots, setDots] = useState("");

  // Animação dos pontos
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length < 10) {
          return prevDots + ".";
        }
        return ""; // Reseta os pontos
      });
    }, 40); // Adiciona um ponto a cada 40ms

    return () => clearInterval(interval); // Limpa o intervalo no unmount
  }, []);

  return (
    <motion.div
      className="w-full h-dvh absolute z-50 flex flex-col justify-center bg-[#0E0E0E] items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <span className="inline-block text-6xl text-white text-left">
        {dots}
      </span>
    </motion.div>
  );
}

export default function TitleAnimateForEntry({ children }) {
  return (
    <AnimatePresence>
      <Suspense fallback={<LoadingFallback />}>
        {children}
      </Suspense>
    </AnimatePresence>
  );
}

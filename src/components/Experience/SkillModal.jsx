import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TextRedShadow from "../Global/TextRedShadow";

export function SkillModal({ nome, icon, description, onClose }) {
  const modalRef = useRef(null);

  // Efeito para fechar o modal ao clicar fora dele
  useEffect(
    () => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      // Bloqueia o scroll do corpo da página
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", handleKeyDown);

      // Cleanup function: remove o event listener e restaura o scroll
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    },
    [onClose]
  ); // Roda o efeito apenas quando onClose muda

  return (
    <AnimatePresence>
      <motion.div
        // Fundo escuro (overlay) que cobre a tela
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClose()}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0e0e0e70] p-4"
      >
        {/* Modal content */}
        <motion.div
          ref={modalRef} // Referência ao conteúdo do modal
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 560, damping: 20 }}
          onClick={e => e.stopPropagation()}
          className="relative max-w-md max-md:w-[90vw] w-full bg-[#181818] text-white rounded-lg p-8 shadow-2xl border border-[#303030] overflow-y-auto max-h-[90vh]"
        >
          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <FaTimes size={24} />
          </button>

          {/* Conteúdo do Modal */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={icon}
              alt={`Ícone de ${nome}`}
              className="w-24 h-24 object-contain"
            />
            <TextRedShadow className="text-3xl font-bold">
              {nome}
            </TextRedShadow>
            <p className="text-center text-lg text-[#ccc] leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

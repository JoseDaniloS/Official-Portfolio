import { motion, AnimatePresence } from "framer-motion"; 
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";


const modalVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  transition: { duration: 0.3 },
};

export function ProjectModal({ projectsData, onClose }) {
  // Efeito para gerenciar o fechamento com 'ESC' e o scroll do body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Bloqueia o scroll do body ao abrir o modal
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Função de limpeza do useEffect para remover o event listener e restaurar o scroll
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restaura o scroll
    };
  }, [onClose]);

  // Se projectsData não existir, não renderizamos nada
  if (!projectsData) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 flex h-dvh items-center justify-center bg-[#00000099] text-white z-30"
      >
        <motion.div
        {...modalVariants}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#252525] z-40 relative max-md:w-[90vw] max-w-[1170px] p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]"
        >
          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer neon-red-button rounded px-4 py-2 font-semibold transition"
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>

          {/* Conteúdo do modal */}
          <img
            src={projectsData.image}
            alt={projectsData.title}
            className="w-full rounded mb-4"
          />

          <h2 className="text-xl font-bold mb-4">{projectsData.title}</h2>

          <div className="space-y-2 max-md:text-sm mb-4">
            {projectsData.description.map((text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Stacks utilizadas:</h4>
            <ul className="flex flex-wrap gap-2 text-sm">
              {projectsData.stacks.map((stack, idx) => (
                <li
                  key={idx}
                  className="bg-red-600 text-white px-2 py-1 rounded-full"
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Autores:</h4>
            <ul className="text-sm list-disc list-inside">
              {projectsData.authors.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm">
            {projectsData.sourceCode && (
              <div className="flex flex-col gap-2">
                {[
                  projectsData.linkRepositorio,
                  projectsData.linkRepositorioAPI,
                ].map((link, index) =>
                  link ? (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold"
                    >
                      Repositório {index === 0 ? "(Frontend)" : "(API)"}:{" "}
                      <span className="transition-all duration-300 hover:text-red-600">
                        {link}
                      </span>
                    </a>
                  ) : null
                )}
              </div>
            )}
            <a
              href={projectsData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              Link do Projeto:{" "}
              <span className="transition-all duration-300 text-red-500">
                {projectsData.url}
              </span>
            </a>
            {projectsData.playStoreUrl && (
              <a
                href={projectsData.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Link da PlayStore:{" "}
                <span className="transition-all duration-300 text-red-500">
                  {projectsData.playStoreUrl}
                </span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
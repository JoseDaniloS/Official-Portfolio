import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  FaTimes,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLink,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const modalVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 500 },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Objeto de mapeamento de ícones
const stackIcons = {
  React: <FaReact size={24} className="text-blue-400" />,
  "Node.js": <FaNodeJs size={24} className="text-green-500" />,
  "Tailwind CSS": <SiTailwindcss size={24} className="text-teal-400" />,
  Vite: <SiVite size={24} className="text-purple-500" />,
  JavaScript: <FaJs size={24} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={24} className="text-blue-500" />,
  HTML5: <FaHtml5 size={24} className="text-orange-600" />,
  CSS3: <FaCss3 size={24} className="text-blue-600" />,
  PostgreSQL: <SiPostgresql size={24} className="text-blue-500" />,
  Express: <SiExpress size={24} className="text-gray-400" />,
  MongoDB: <SiMongodb size={24} className="text-green-600" />,
  Git: <FaGitAlt size={24} className="text-orange-600" />,
  GitHub: <FaGithub size={24} className="text-gray-400" />,
  Figma: <FaFigma size={24} className="text-purple-500" />,
};

export function ProjectModal({ projectsData, onClose }) {
  // Efeito para gerenciar o fechamento com 'ESC' e o scroll do body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restaura o scroll
    };
  }, [onClose]);

  if (!projectsData) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      >
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative h-[90vh] max-w-6xl overflow-hidden rounded-xl bg-gray-900 shadow-2xl ring-1 ring-white/10"
        >
          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 rounded-full bg-gray-800 p-2 text-white transition-colors duration-300 hover:bg-gray-700"
            aria-label="Fechar modal"
          >
            <FaTimes size={24} />
          </button>

          {/* Conteúdo do modal */}
          <div className="flex h-full flex-col lg:flex-row">
            {/* Seção da Imagem */}
            <div className="relative h-2/5 flex-shrink-0 overflow-hidden lg:h-full lg:w-2/5">
              <img
                src={projectsData.image}
                alt={projectsData.title}
                className="h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            {/* Seção do Conteúdo */}
            <div className="flex h-3/5 flex-grow flex-col justify-between overflow-y-auto p-8 lg:h-full lg:w-3/5">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-red-500">
                  {projectsData.title}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {projectsData.stacks.map((stack, idx) =>
                    stackIcons[stack] ? (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-400 shadow-sm transition-colors duration-200 hover:border-red-500 hover:text-red-500"
                      >
                        {stackIcons[stack]}
                        {stack}
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className="rounded-full bg-gray-600/20 px-3 py-1 text-xs font-medium text-gray-400"
                      >
                        {stack}
                      </div>
                    )
                  )}
                </div>

                <div className="space-y-4 text-sm text-gray-300">
                  {projectsData.description.map((text, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></p>
                  ))}
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-400">Autores:</h4>
                  <ul className="list-inside list-disc text-sm text-gray-300">
                    {projectsData.authors.map((author, index) => (
                      <li key={index}>{author}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Seção de Links */}
              <div className="mt-8 flex flex-col gap-4">
                <h4 className="font-semibold text-gray-400">
                  Links do Projeto:
                </h4>
                <div className="flex flex-wrap gap-4">
                  {projectsData.sourceCode && (
                    <>
                      {projectsData.linkRepositorio && (
                        <a
                          href={projectsData.linkRepositorio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white transition-colors duration-200 hover:border-red-500 hover:bg-red-500"
                        >
                          <FaGithub />
                          <span>Repositório (Frontend)</span>
                        </a>
                      )}
                      {projectsData.linkRepositorioAPI && (
                        <a
                          href={projectsData.linkRepositorioAPI}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white transition-colors duration-200 hover:border-red-500 hover:bg-red-500"
                        >
                          <FaGithub />
                          <span>Repositório (API)</span>
                        </a>
                      )}
                    </>
                  )}
                  {projectsData.url && (
                    <a
                      href={projectsData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white transition-colors duration-200 hover:border-red-500 hover:bg-red-500"
                    >
                      <FaLink />
                      <span>Projeto Ao Vivo</span>
                    </a>
                  )}
                  {projectsData.playStoreUrl && (
                    <a
                      href={projectsData.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white transition-colors duration-200 hover:border-red-500 hover:bg-red-500"
                    >
                      <FaLink />
                      <span>Play Store</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import { motion } from "motion/react";
import { useEffect } from "react";

export function ProjectModal({ projectsData, onClose }) {
  //Função para fechar o modal quando apertar "ESC"
  useEffect(
    () => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    },
    [onClose]
  );

  return (
    <div
      onClick={onClose}
      className="fixed h-dvh inset-0 flex items-center text-white justify-center bg-[#00000099] z-30"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={e => e.stopPropagation()}
        viewport={{ once: true }}
        className="bg-[#252525] z-40 max-md:w-[90vw] max-w-[1170px] p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <img
          src={projectsData.image}
          alt={projectsData.title}
          className="w-full rounded mb-4"
        />

        <h2 className="text-xl font-bold mb-4">
          {projectsData.title}
        </h2>

        <div className="space-y-2 max-md:text-sm mb-4">
          {projectsData.description.map((text, index) =>
            <p key={index} dangerouslySetInnerHTML={{ __html: text }}>
            
            </p>
          )}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Stacks utilizadas:</h4>
          <ul className="flex flex-wrap gap-2 text-sm">
            {projectsData.stacks.map((stack, idx) =>
              <li
                key={idx}
                className="bg-red-600 text-white px-2 py-1 rounded-full"
              >
                {stack}
              </li>
            )}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Autores:</h4>
          <ul className="text-sm list-disc list-inside">
            {projectsData.authors.map((author, index) =>
              <li key={index}>
                {author}
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-2 mt-4 text-sm">
          {projectsData.sourceCode &&
            <div className="flex flex-col gap-2">
              {[
                projectsData.linkRepositorio,
                projectsData.linkRepositorioAPI
              ].map(
                (link, index) =>
                  link
                    ? <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold"
                      >
                        Repositório {index === 0 ? "(Frontend)" : "(API)"}:{" "}
                        <span className="hover:text-red-600 transition-all duration-300">
                          {link}
                        </span>
                      </a>
                    : null
              )}
            </div>}

          <a
            href={projectsData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Link do Projeto:{" "}
            <span className=" transition-all duration-300 text-red-500">
              {projectsData.url}
            </span>
          </a>
          {projectsData.playStoreUrl && <a
            href={projectsData.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Link da PlayStore:{" "}
            <span className=" transition-all duration-300 text-red-500">
              {projectsData.playStoreUrl}
            </span>
          </a>}
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-red-600 cursor-pointer hover:bg-red-700 font-semibold text-white px-4 py-2 rounded transition"
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
}

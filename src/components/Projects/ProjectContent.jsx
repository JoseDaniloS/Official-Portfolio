import { motion } from "framer-motion";
import "./global.css";

export function ProjectContent({ projectsData, onMoreDetails }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="group relative h-[700px] w-full max-md:h-[450px] overflow-hidden rounded-lg bg-[#242A45] shadow-lg transition-transform duration-500 ease-in-out  hover:shadow-2xl"
    >
      <img
        src={projectsData.image}
        alt={projectsData.title}
        loading="lazy"
        className="h-full w-full object-cover"
      />

      {/* Overlay com gradiente aprimorado */}
      <div className="absolute inset-0 flex flex-col justify-end gap-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-7">
        <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <h3 className="text-2xl font-semibold text-white max-md:text-[16px]">
            {projectsData.title}
          </h3>
          <p className="text-sm text-gray-300 max-md:text-[13px]">
            {projectsData.shortDescription}
          </p>
        </div>
        
        <button
          onClick={onMoreDetails}
          className="self-start cursor-pointer rounded-md border border-white/50 bg-white/10 px-4 py-2 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105 max-md:px-3 max-md:py-1 max-md:text-[12px]"
        >
          Ver Detalhes
        </button>
      </div>
    </motion.article>
  );
}

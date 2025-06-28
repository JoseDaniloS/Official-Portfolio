import { motion } from "framer-motion";
import "./global.css"


export function ProjectContent({ projectsData, onMoreDetails}) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
      className="max-md:w-[90vw] max-md:h-[450px] bg-[#242A45] rounded-[2px] overflow-hidden relative flex flex-col items-center justify-center"
    >
      <img
        src={projectsData.image}
        alt={projectsData.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-7 h-full w-full flex flex-col justify-end gap-5 bg-gradient-to-t from-[#000000] to-transparent">
        <div>
          <h3 className="text-2xl max-md:text-[16px] font-semibold text-white">
            {projectsData.title}
          </h3>
          <p className="text-white max-md:text-[13px]">
            {projectsData.shortDescription}
          </p>
        </div>
        <button
          onClick={onMoreDetails}
          className="self-start neon-red-button cursor-pointer  font-medium px-4 max-md:p-2 max-md:text-[12px] py-2 rounded  hover:scale-105 transition duration-500"
        >
          Mostrar mais detalhes
        </button>
      </div>
    </motion.article>
  );
}


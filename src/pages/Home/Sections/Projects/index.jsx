import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TitleSections from "../../../../components/TitleSections";
import { ProjectsInfo } from "../../../../database/Projects";
import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-around bg-[#121212] py-10"
    >
      <TitleSections text="Projetos" />

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="md:w-[80%] max-md:w-[90vw]"
      >
        {ProjectsInfo.map(project =>
          <SwiperSlide key={project.id}>
            <ProjectContent
              ProjectInfo={project}
              onMoreDetails={() => setSelectedProject(project)}
            />
          </SwiperSlide>
        )}
      </Swiper>

      <div className="flex md:w-[80%] max-md:w-[90vw] gap-[4px] mt-4">
        {Array.from({ length: ProjectsInfo.length }).map((_, index) =>
          <div
            key={index}
            className={`w-[32px] h-[2px] rounded-[99px] transition-all duration-300 ${index ===
            activeIndex
              ? "bg-red-600"
              : "bg-[#FFFFFF1A]"}`}
          />
        )}
      </div>

      {selectedProject &&
        <ProjectModal
          ProjectInfo={selectedProject}
          onClose={() => setSelectedProject(null)}
        />}
    </div>
  );
}

function ProjectContent({ ProjectInfo, onMoreDetails }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="max-md:w-[90vw] max-md:h-[450px] bg-[#242A45] rounded-[2px] overflow-hidden relative flex flex-col items-center justify-center"
    >
      <img
        src={ProjectInfo.image}
        alt={ProjectInfo.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-7 h-full w-full flex flex-col justify-end gap-5 bg-gradient-to-t from-[#000000] to-transparent">
        <div>
          <h3 className="text-2xl max-md:text-[16px] font-semibold text-white">
            {ProjectInfo.title}
          </h3>
          <p className="text-white max-md:text-[13px]">
            {ProjectInfo.shortDescription}
          </p>
        </div>
        <button
          onClick={onMoreDetails}
          className="self-start bg-white cursor-pointer text-black font-medium px-4 max-md:p-2 max-md:text-[12px] py-2 rounded hover:bg-gray-200 transition"
        >
          Mostrar mais detalhes
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ ProjectInfo, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed h-dvh inset-0 flex items-center text-white justify-center bg-[#00000099] z-30"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#252525] z-40 max-md:w-[90vw] max-w-[1170px] p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <img
          src={ProjectInfo.image}
          alt={ProjectInfo.title}
          className="w-full rounded mb-4"
        />

        <h2 className="text-xl font-bold mb-4">
          {ProjectInfo.title}
        </h2>

        <div className="space-y-2 max-md:text-sm mb-4">
          {ProjectInfo.description.map((text, idx) =>
            <p key={idx}>
              {text}
            </p>
          )}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Stacks utilizadas:</h4>
          <ul className="flex flex-wrap gap-2 text-sm">
            {ProjectInfo.stacks.map((stack, idx) =>
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
          <p className="text-sm">
            {ProjectInfo.authors.join(", ")}
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4 text-sm">
          {ProjectInfo.sourceCode &&
            <div className="flex flex-col gap-2">
              {ProjectInfo.linkRepositorio &&
                <a
                  href={ProjectInfo.linkRepositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 font-semibold transition-all duration-300"
                >
                  Repositório (Frontend): {ProjectInfo.linkRepositorio}
                </a>}
              {ProjectInfo.linkRepositorioAPI &&
                <a
                  href={ProjectInfo.linkRepositorioAPI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 font-semibold transition-all duration-300"
                >
                  Repositório (API): {ProjectInfo.linkRepositorioAPI}
                </a>}
            </div>}

          <a
            href={ProjectInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 font-semibold transition-all duration-300"
          >
            Link do Projeto: {ProjectInfo.url}
          </a>
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

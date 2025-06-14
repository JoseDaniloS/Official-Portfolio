import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TitleSections from "../../../../components/Global/TitleSections";
import { ProjectsInfo } from "../../../../database/Projects";
import { useRef, useState } from "react";
import { CustomPagination } from "../../../../components/Global/CustomPagination";
import { ProjectModal } from "../../../../components/Projects/ProjectModal";
import { ProjectContent } from "../../../../components/Projects/ProjectContent";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div
      id="projects"
      className="w-full min-h-screen  flex flex-col items-center justify-around bg-[#121212] py-10"
    >
      <TitleSections text="Projetos" />

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="md:w-[80%] max-md:w-[90vw]"
      >
        {ProjectsInfo.map(project =>
          <SwiperSlide key={project.id}>
            <ProjectContent
              projectsData={project}
              onMoreDetails={() => setSelectedProject(project)}
            />
          </SwiperSlide>
        )}
      </Swiper>

      <CustomPagination size={ProjectsInfo.length} activeIndex={activeIndex} />

      {selectedProject &&
        <ProjectModal
          projectsData={selectedProject}
          onClose={() => setSelectedProject(null)}
        />}
    </div>
  );
}

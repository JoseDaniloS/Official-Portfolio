import TitleSections from "../../../../components/Global/TitleSections";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { reviews } from "../../../../database/Feedbacks";
import { motion } from "framer-motion";
import { motionConfig } from "../../../../utils/functions";
import { CustomPagination } from "../../../../components/Global/CustomPagination";
import { FaStar } from "react-icons/fa";
import TextRedShadow from "../../../../components/Global/TextRedShadow";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotsCount, setDotsCount] = useState(reviews.length); // Controla quantos indicadores serão mostrados
  const swiperRef = useRef(null);
  const SMARTPHONE_WIDTH = 768;
  // Atualiza a quantidade de indicadores com base no tamanho da tela
  useEffect(() => {
    const updateDots = () => {
      if (window.innerWidth >= SMARTPHONE_WIDTH) {
        setDotsCount(reviews.length - 1); // Em telas maiores, mostra metade dos pontos
      } else {
        setDotsCount(reviews.length); // Em telas menores, mostra todos os pontos
      }
    };

    updateDots(); // Chama a função ao montar o componente
    window.addEventListener("resize", updateDots); // Atualiza ao redimensionar

    return () => window.removeEventListener("resize", updateDots); // Remove o listener ao desmontar
  }, []);

  return (
    <div
      id="reviews"
      className="w-full h-full flex flex-col items-center justify-around gap-20 py-20"
    >
      <TitleSections text="Feedbacks" />
      <motion.p
        {...motionConfig}
        className="text-3xl max-md:text-2xl text-white font-bold md:w-[80%] max-md:w-[90vw] mb-10"
      >
        Esses depoimentos refletem a experiência de profissionais com os quais
        tive o privilégio de colaborar.<br />Agradeço a cada um pela confiança e
        parceria ao longo dos projetos.
      </motion.p>

      <Swiper
        spaceBetween={40}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="md:w-[80%] max-md:w-[90vw]"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1.3 },
          1024: { slidesPerView: 2 }
        }}
      >
        {reviews.map((review, index) =>
          <SwiperSlide key={index}>
            <ReviewCard {...review} />
          </SwiperSlide>
        )}
      </Swiper>

      <CustomPagination size={dotsCount} activeIndex={activeIndex} />
    </div>
  );
}

function ReviewCard({ name, role, image, feedback, stars }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 flex flex-col gap-4 rounded-xl text-white  transition-transform duration-300 hover:scale-105  backdrop-blur-md shadow-lg border border-white/3"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={`Foto de ${name}`}
            loading="lazy"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <TextRedShadow className="text-lg font-bold">
              {name}
            </TextRedShadow>
            <h3 className="text-sm text-[#999]">
              {role}
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 5 }).map(
            (_, index) =>
              index < stars
                ? <FaStar color="#FF1744" />
                : <FaStar color="#fefefe" />
          )}
        </div>
      </div>
      <blockquote className="text-[#bbb] border-l-2 pl-3 border-[#bbb] italic">
        “{feedback}”
      </blockquote>
    </motion.div>
  );
}

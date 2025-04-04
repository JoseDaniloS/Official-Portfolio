import TitleSections from "../../../../components/TitleSections";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import StarRed from "/FeedbacksIcons/StarRed.png";
import StarWhite from "/FeedbacksIcons/StarWhite.png";
import { reviews } from "../../../../database/Feedbacks";
import { motion } from "motion/react";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotsCount, setDotsCount] = useState(reviews.length); // Controla quantos indicadores serão mostrados
  const swiperRef = useRef(null);

  // Atualiza a quantidade de indicadores com base no tamanho da tela
  useEffect(() => {
    const updateDots = () => {
      if (window.innerWidth >= 768) {
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
      className="w-full min-h-screen flex flex-col items-center justify-around bg-[#303030] py-20"
    >
      <TitleSections text="Feedbacks" />
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }} // só anima uma vez, quando 20% do elemento estiver visível
        transition={{ duration: 0.8 }}
        className="text-3xl text-[#bbb] font-bold md:w-[80%] max-md:w-[90vw] mb-10"
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

      <div className="flex gap-[4px] mt-4">
        {Array.from({ length: dotsCount }).map((_, index) =>
          <div
            key={index}
            className={`w-[32px] h-[2px] rounded-[99px] transition-all duration-300 ${index ===
            activeIndex
              ? "bg-red-600"
              : "bg-[#FFFFFF1A]"}`}
          />
        )}
      </div>
    </div>
  );
}

function ReviewCard({ name, role, image, feedback, stars }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // só anima uma vez, quando 20% do elemento estiver visível
      transition={{ duration: 0.8 }}
      className="bg-[#181818] p-6 flex flex-col gap-4 rounded-xl text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#202020]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold text-white">
              {name}
            </h2>
            <h3 className="text-sm text-[#999]">
              {role}
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 5 }).map(
            (_, index) =>
              index < stars
                ? <img
                    key={index}
                    src={StarRed}
                    alt="Estrela preenchida"
                    className="w-5 h-5"
                  />
                : <img
                    key={index}
                    src={StarWhite}
                    alt="Estrela vazia"
                    className="w-5 h-5"
                  />
          )}
        </div>
      </div>
      <blockquote className="text-[#bbb] border-l-2 pl-3 border-[#bbb] italic">
        “{feedback}”
      </blockquote>
    </motion.div>
  );
}

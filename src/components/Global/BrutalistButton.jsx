// Animações apenas com transform/opacity (rodam na GPU, sem recalcular layout)
const BrutalistButton = ({ logo: Logo, title, subtitle, onClick }) => {
  return (
    <button
      type="button"
      aria-label={title}
      onClick={onClick}
      className="relative h-[130px] w-[130px] max-md:h-[90px] max-md:w-[90px] border-[3px] border-white/5 bg-black/40 rounded-xl shadow-[4px_4px_0px_#000000] overflow-hidden cursor-pointer [transform:translateZ(0)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#000000] group"
    >
      {/* Preenchimento neon que sobe no hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#ff073a] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 will-change-transform"
      />

      {/* Logo: encolhe e sobe no hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[18%] will-change-transform">
        <div className="flex items-center justify-center w-[90px] h-[90px] max-md:w-[64px] max-md:h-[64px] bg-black rounded-full shadow-md transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[0.55] group-hover:rotate-[360deg]">
          <Logo color="#FF1744" className="text-5xl max-md:text-3xl" />
        </div>
      </div>

      {/* Texto */}
      <div className="absolute bottom-[12px] max-md:bottom-[6px] left-0 right-0 z-[2] flex flex-col items-center text-center leading-[1.3] opacity-0 translate-y-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0">
        <span className="text-[13px] max-md:text-[8px] font-medium mb-[2px] text-white">
          {subtitle}
        </span>
        <span className="text-xs max-md:text-[8px] font-extrabold tracking-[0.8px] text-white/90">
          {title}
        </span>
      </div>
    </button>
  );
};

export default BrutalistButton;

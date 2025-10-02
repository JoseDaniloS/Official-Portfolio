const BrutalistButton = ({ logo: Logo, title, subtitle, onClick }) => {
  return (
    <button
      type="button"
      aria-label={title}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center max-md:h-[90px] max-md:w-[90px] h-[130px] w-[130px] border-[3px] backdrop-blur-sm border-white/5 rounded-xl shadow-[4px_4px_0px_#000000] overflow-hidden cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-1.5 hover:shadow-[8px_8px_0px_#000000] group"
    >
      {/* Efeito circular neon */}
      <span
        className="absolute left-1/2 bottom-[-150%] w-[300%] h-[300%] rounded-full transform -translate-x-1/2 scale-0 transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100"
        style={{ backgroundColor: "#ff073a" }} // Neon Red
      />

      {/* Logo no centro */}
      <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-md:group-hover:top-[30%] w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px] bg-black rounded-full shadow-md transition-all duration ease-in group-hover:animate-spin max-md:group-hover:w-[40px]  max-md:group-hover:h-[40px] group-hover:w-[50px] group-hover:h-[50px] group-hover:top-[28%]">
        <Logo
          color={"#FF1744"}
          className={
            "group-hover:text-2xl text-5xl max-md:text-4xl transition-all duration-300"
          }
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col items-center text-center leading-[1.3] transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 translate-y-5 z-[2] absolute bottom-[12px] left-0 right-0 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="text-[13px] max-md:text-[8px] font-medium mb-[2px] text-white">
          {subtitle}
        </span>
        <span className="text-xs max-md:text-[8px] font-extrabold  tracking-[0.8px] text-[#ff073a] group-hover:text-white/90">
          {title}
        </span>
      </div>
    </button>
  );
};

export default BrutalistButton;

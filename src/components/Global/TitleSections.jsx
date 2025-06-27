export default function TitleSections({ text }) {
    return (
      <div className="relative h-1/3 flex flex-col items-center">
        {/* Texto de fundo */}
        <h1 className="absolute text-nowrap uppercase text-[#99999920] text-9xl max-xl:text-6xl font-extrabold">
          {text}
        </h1>
  
        {/* Texto principal */}
        <div className="relative flex xl:pt-11 pt-2 flex-col items-center justify-center h-full w-full">
          <h1 className="text-3xl md:text-4xl text-center font-bold text-white">
            {text}
          </h1>
          <hr className="border neon-red-card w-20 mx-auto mt-2" />
        </div>
      </div>
    );
  }
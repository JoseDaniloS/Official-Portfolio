export default function TitleSections({ text }) {
    return (
      <div className="relative py-4 flex flex-col items-center">
        {/* Texto de fundo */}
        <h1 className="text-nowrap uppercase text-[#ffffff] text-shadow-lg text-shadow-neon-red text-9xl max-xl:text-6xl font-extrabold">
          {text}
        </h1>
      </div>
    );
  }
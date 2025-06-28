import TextRedShadow from "./TextRedShadow";

export default function TitleSections({ text }) {
    return (
      <div className=" py-4 flex flex-col items-center">
        {/* Texto de fundo */}
        <TextRedShadow className="text-nowrap uppercase text-8xl max-xl:text-5xl font-extrabold">
          {text}
        </TextRedShadow>
      </div>
    );
  }
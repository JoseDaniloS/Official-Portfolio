import TextRedShadow from "../../components/Global/TextRedShadow";

export default function Footer() {
  return (
    <div className="w-full py-2 flex text-center justify-center">
      <h1 className="text-white max-md:w-[90vw] font-medium">
        Desenvolvido por <TextRedShadow>José Danilo</TextRedShadow>.<br/>
        Gostou do que viu? <TextRedShadow>Vamos conversar!</TextRedShadow>
      </h1>
    </div>
  );
}

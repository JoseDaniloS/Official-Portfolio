import { useEffect, useState } from "react";
import { handleClick } from "../../utils/functions";

export default function ReturnToTop() {
  const [isVisible, setVisible] = useState(false);

  const heightLimit = window.screen.height / 2;

  const toggleVisibility = () => {
    window.scrollY > heightLimit ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`fixed cursor-pointer neon-red-button z-[100] -right-5 bottom-0 text-white h-12 w-12 rounded-full shadow-lg scale-0 hover:scale-115  transition duration-400 ${isVisible
        ? "opacity-100 scale-100 -translate-y-5 -translate-x-10"
        : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
  );
}

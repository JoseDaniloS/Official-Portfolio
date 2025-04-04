import { handleClick } from "../utils/functions";

export default function ReturnToTop() {

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 cursor-pointer right-5 bg-red-800 text-white h-12 w-12 rounded-full shadow-lg hover:scale-115 hover:bg-red-600 transition duration-300"
    >
      ↑
    </button>
  );
}
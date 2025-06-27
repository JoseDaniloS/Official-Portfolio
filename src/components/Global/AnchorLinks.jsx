import { scrollToSection } from "../../utils/functions";

export function AnchorLinks({ activeSection, menuItems, setMenuOpen }) {
  return (
    <nav className={`text-[#FFFFFFDE] text-base list-none font-medium`}>
      <ul className="flex flex-col items-center gap-[20px]">
        {menuItems.map(item =>
          <li key={item.name} className="relative">
            <a
              href={item.href}
              className={`transition-colors duration-500 hover:neon-red-hover ${activeSection ===
              item.href
                ? "text-white text-shadow-neon-red text-shadow-lg"
                : ""}`}
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.href);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </a>
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 neon-red-button ${activeSection ===
              item.href
                ? "w-full"
                : ""} transition-all duration-500 ease-in-out`}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

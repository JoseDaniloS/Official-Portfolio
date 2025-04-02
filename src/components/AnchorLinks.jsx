import { scrollToSection } from "../utils/functions";

export function AnchorLinks({ menuItems }) {
  return (
    <nav className={`text-[#FFFFFFDE] text-base list-none font-medium`}>
      <ul className="flex flex-col items-center gap-[20px]">
        {menuItems.map(item =>
          <li key={item.name}>
            <a
              href={item.href}
              className="transition-colors duration-500 hover:text-red-800"
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

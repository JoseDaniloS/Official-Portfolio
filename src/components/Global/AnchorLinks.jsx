import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/functions";

export function AnchorLinks({ activeSection, menuItems, setMenuOpen, layoutId = "nav", itemVariants }) {
  return (
    <nav className="text-[#FFFFFFDE] text-base list-none font-medium">
      <ul className="flex flex-col items-center gap-[20px]">
        {menuItems.map((item, index) => {
          const isActive = activeSection === item.href;
          return (
            <motion.li key={item.name} variants={itemVariants} className="relative">
              <a
                href={`#${item.href}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative inline-flex items-center gap-2 px-2 py-1 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-white text-shadow-neon-red text-shadow-lg italic" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setMenuOpen?.(false);
                }}
              >
                <span
                  className={`font-mono text-xs transition-colors duration-300 ${
                    isActive ? "text-neon-red" : "text-white/30 group-hover:text-neon-red"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {item.name}
                </span>
              </a>
              {isActive && (
                <motion.div
                  layoutId={`${layoutId}-underline`}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] neon-red-button rounded-full"
                />
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

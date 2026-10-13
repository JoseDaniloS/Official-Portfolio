import Hamburger from "hamburger-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { AnchorLinks } from "../../components/Global/AnchorLinks";
import { menuItems } from "../../database/menuIcons";
import { useActiveSection } from "../../hooks/useActiveSection";
import { EASE_OUT, scrollToSection } from "../../utils/functions";

const LOGO = "<JDanilo />";

const menuVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.4, ease: EASE_OUT, when: "afterChildren", staggerChildren: 0.03, staggerDirection: -1 },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.5, ease: EASE_OUT, staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -24, filter: "blur(4px)" },
  open: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: EASE_OUT } },
};

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(menuItems);
  const { scrollY } = useScroll();

  // Oculta o cabeçalho ao rolar para baixo e mostra ao rolar para cima
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(current > 20);
    if (menuOpen) return;
    setIsHidden(current > previous && current > 120);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className={`w-full hidden max-lg:block fixed top-0 left-0 z-30 transition-[background-color,backdrop-filter,box-shadow,padding] duration-500 ${
        isScrolled || menuOpen
          ? "bg-[#0E0E0E]/80 backdrop-blur-lg shadow-[0_1px_0_#FF174433] py-3 px-5"
          : "bg-transparent py-5 px-5"
      }`}
    >
      <div className="flex items-center relative z-10 justify-between w-full">
        <button
          type="button"
          onClick={() => {
            scrollToSection("home");
            setMenuOpen(false);
          }}
          aria-label="Voltar ao início"
          className="text-2xl font-bold text-white font-mono"
        >
          {LOGO.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={i > 0 && i < LOGO.length - 3 ? "text-white" : "text-neon-red"}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[2px] h-6 ml-1 align-middle bg-neon-red"
          />
        </button>
        <Hamburger color="white" size={24} toggled={menuOpen} toggle={setMenuOpen} label="Abrir menu" />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full py-8 bg-[#0E0E0E]/95 backdrop-blur-lg border-b border-[#FF1744]/30 flex flex-col items-center"
          >
            <AnchorLinks
              menuItems={menuItems}
              activeSection={activeSection}
              setMenuOpen={setMenuOpen}
              layoutId="mobile-nav"
              itemVariants={itemVariants}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

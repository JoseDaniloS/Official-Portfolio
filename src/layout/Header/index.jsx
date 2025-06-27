import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { AnchorLinks } from "../../components/Global/AnchorLinks";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  // Lógica para ocultar ou exibir o cabeçalho no scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "Início", href: "home" },
    { name: "Sobre mim", href: "about" },
    { name: "Experiência", href: "experience" },
    { name: "Projetos", href: "projects" },
    { name: "Feedbacks", href: "reviews" },
    { name: "Contato", href: "contact" }
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      ref={headerRef}
      className={`w-full hidden max-lg:block p-5 fixed top-0 left-0 bg-[#0E0E0E70] transition-all duration-500
          ${isHeaderVisible
            ? "translate-y-0"
            : "-translate-y-full"} shadow-md z-30`}
    >
      <div className="flex items-center relative z-10 justify-between w-full">
        <h1 className="text-3xl font-bold text-white">
          {"<Jdkskj />"}
        </h1>
        <Hamburger color="white" toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <Menu
        menuOpen={menuOpen}
        menuItems={menuItems}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}

function Menu({ menuOpen, menuItems, setMenuOpen }) {
  return (
    <div
      className={`absolute top-0 z-0 left-0 w-full py-5 bg-[#0E0E0E70] flex flex-col items-center justify-center transform transition-transform duration-500 ${menuOpen
        ? "translate-y-20"
        : "-translate-y-full"}`}
    >
      <AnchorLinks menuItems={menuItems} setMenuOpen={setMenuOpen} />
    </div>
  );
}

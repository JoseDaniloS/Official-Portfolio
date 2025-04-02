import Hamburger from "hamburger-react";
import { useState } from "react";
import { AnchorLinks } from "../../components/AnchorLinks";

export default function Header() {
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
    <header className="w-full hidden max-lg:block p-5 fixed top-0 left-0 bg-[#0E0E0E] shadow-md z-50">
      <div className="flex items-center relative z-10 justify-between w-full">
        <h1 className="text-3xl font-bold text-white">
          {"<J/D>"}
        </h1>
        <Hamburger color="white" toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <Menu menuOpen={menuOpen} menuItems={menuItems} setMenuOpen={setMenuOpen} />
    </header>
  );
}

function Menu({ menuOpen, menuItems, setMenuOpen }) {
  return (
    <div
      className={`absolute top-0 z-0 left-0 w-full py-5 bg-[#0E0E0E] flex flex-col items-center justify-center transform transition-transform duration-500 ${menuOpen
        ? "translate-y-20"
        : "-translate-y-full"}`}
    >
      <AnchorLinks menuItems={menuItems} setMenuOpen={setMenuOpen} />
    </div>
  );
}

import React from "react";

import AboutMe from "./Sections/About_Me";
import Aside from "../../layout/Aside";
import Center from "./Sections/Center";
import Contacts from "./Sections/Contacts";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Reviews from "./Sections/Reviews";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ReturnToTop from "../../components/Global/ReturnToTop";
import TitleAnimateForEntry from "../../components/Global/TitleAnimateForEntry";
import { useVisibilityState } from "../../hooks/useVisibilityState";

export default function Home() {
const { showContent } = useVisibilityState();

  return (
    <>
      {/* Animação de abertura do título */}
      <TitleAnimateForEntry showContent={showContent} />

      {/* Conteúdo principal */}
      {showContent && (
        <main className="w-full h-full justify-end flex">
          <ReturnToTop />
          <Header />
          <Aside />
          <div className="w-4/5 max-lg:w-full h-full flex flex-col bg-[#0E0E0E] overflow-x-hidden">
            <Center />
            <AboutMe />
            <Experience />
            <Projects />
            <Reviews />
            <Contacts />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

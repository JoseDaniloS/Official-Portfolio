import React, { lazy } from "react";

// Importações lazy-loaded
const Header = lazy(() => import("../../layout/Header"));
const Aside = lazy(() => import("../../layout/Aside"));
const ReturnToTop = lazy(() => import("../../components/Global/ReturnToTop"));
const ThreeBackground = lazy(() =>
  import("../../components/Global/ThreeBackground")
);
const Center = lazy(() => import("./Sections/Center"));
const AboutMe = lazy(() => import("./Sections/About_Me"));
const Experience = lazy(() => import("./Sections/Experience"));
const Projects = lazy(() => import("./Sections/Projects"));
const Reviews = lazy(() => import("./Sections/Reviews"));
const Contacts = lazy(() => import("./Sections/Contacts"));
const Footer = lazy(() => import("../../layout/Footer"));

// A importação do TitleAnimateForEntry agora é estática.
import TitleAnimateForEntry from "../../components/Global/TitleAnimateForEntry";

export default function Home() {
  return (
    <TitleAnimateForEntry>
      <main className="w-full h-full justify-end flex">
        <ThreeBackground />
        <ReturnToTop />
        <Header />
        <Aside />
        <div className="w-4/5 max-lg:w-full h-full flex flex-col bg-[#00000070] overflow-x-hidden">
          <Center />
          <AboutMe />
          <Experience />
          <Projects />
          <Reviews />
          <Contacts />
          <Footer />
        </div>
      </main>
    </TitleAnimateForEntry>
  );
}

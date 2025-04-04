import AboutMe from "./Sections/About_Me";
import Aside from "../../layout/Aside";
import Center from "./Sections/Center";
import Contacts from "./Sections/Contacts";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Reviews from "./Sections/Reviews";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ReturnToTop from "../../components/ReturnToTop";
import { useState } from "react";

export default function Home() {

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <main className="w-full h-full justify-end flex">
      <ReturnToTop />
      <Header setHeaderHeight={setHeaderHeight} />
      <Aside />
      <div className="w-4/5 max-lg:w-full h-full flex flex-col overflow-x-hidden">
        <Center headerHeight={headerHeight} />
        <AboutMe />
        <Experience />
        <Projects />
        <Reviews />
        <Contacts />
        <Footer />
      </div>
    </main>
  );
}

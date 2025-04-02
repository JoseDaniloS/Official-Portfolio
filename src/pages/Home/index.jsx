import AboutMe from "./Sections/About_Me";
import Aside from "../../layout/Aside";
import Center from "./Sections/Center";
import Contacts from "./Sections/Contacts";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Reviews from "./Sections/Reviews";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function Home() {
  return (
    <main className="w-full h-full justify-end flex">
      <Header />
      <Aside />
      <div className="w-4/5 max-lg:w-full h-full flex flex-col overflow-x-hidden">
        <Center />
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

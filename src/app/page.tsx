import Image from "next/image";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="bg-white antialiased px-6">
        <Header />
        <HeroSection />
        <Contact />
        <ProjectsSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

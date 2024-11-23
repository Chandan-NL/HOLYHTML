
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectsSection from "./components/ProjectsSection";
import ServiceSection from "./components/ServiceSection";
import NewSection from "./components/NewSection";

export default function Home() {
  return (
    <>
      <main className="bg-white antialiased px-6">
        <Header />
        <HeroSection />
        <NewSection />
        <ProjectsSection />
        <ServiceSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

"use client"
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectsSection from "./components/ProjectsSection";
import ServiceSection from "./components/ServiceSection";
import NewSection from "./components/NewSection";
import FadeIn from "./components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <>
      <main className="bg-white antialiased px-6" aria-hidden="false">

        <Header />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
        >

          {/* <FadeIn className="" duration={200} >
        </FadeIn> */}
          <FadeIn className="" duration={200} >
            <HeroSection />
          </FadeIn>

          <FadeIn className="" duration={200} >
            <NewSection />
          </FadeIn>

          <FadeIn className="" duration={200} >
            <ProjectsSection />
          </FadeIn>

          <FadeIn className="" duration={200} >
            <ServiceSection />
          </FadeIn>

          <FadeIn className="" duration={200} >
            <Contact />
          </FadeIn>

        </motion.div>
        <Footer />

      </main>
    </>
  );
}

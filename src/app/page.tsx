import Image from "next/image";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="bg-white  antialiased px-6">
        <Header />
        <HeroSection />
      </main>
    </>
  );
}

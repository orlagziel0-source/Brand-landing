import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PointOfView from "@/components/PointOfView";
import WhatCanBeBuilt from "@/components/WhatCanBeBuilt";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="scroll-mt-28">
        <Hero />
        <PointOfView />
        <WhatCanBeBuilt />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

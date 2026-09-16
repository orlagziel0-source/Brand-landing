import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PointOfView from "@/components/PointOfView";
import WhereICanHelp from "@/components/WhereICanHelp";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="scroll-mt-28">
        <Hero />
        <PointOfView />
        <WhereICanHelp />
        <WhoIWorkWith />
        <About />
        <HowWeWork />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

// The whole one-page site. Rendered by app/page.tsx (English, "/")
// and app/he/page.tsx (Hebrew, "/he") inside a LanguageProvider.
import Header from "./Header";
import Hero from "./Hero";
import EventsMarquee from "./EventsMarquee";
import PointOfView from "./PointOfView";
import WhatCanBeBuilt from "./WhatCanBeBuilt";
import About from "./About";
import Network from "./Network";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top" className="scroll-mt-28">
        <Hero />
        <EventsMarquee />
        <PointOfView />
        <WhatCanBeBuilt />
        <Network />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { Features, HeroDesktop, Testimonials, Footer, MobileHero } from "../components";

const Home = () => {
  return (
    <>
      {/* desktop */}
      <section className="hidden lg:block">
        <HeroDesktop />
        <Features />
        <Testimonials />
        <Footer />
      </section>

      {/* mobile */}
      <section className="lg:hidden block">
        <MobileHero />
      </section>
    </>
  );
};

export default Home;

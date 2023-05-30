import React from "react";
import { Features, HeroDesktop, Testimonials, Footer } from "../components";

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
      <section className="block lg:hidden">
        hello world
      </section>
    </>
  );
};

export default Home;

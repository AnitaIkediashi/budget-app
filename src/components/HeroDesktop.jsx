import React from "react";
import Navbar from "./Navbar";
import HeroWrapper from "./HeroWrapper";

const HeroDesktop = () => {
  return (
    <div className="h-[90vh] w-full hero-wrapper">
      <Navbar />
      <HeroWrapper />
    </div>
  );
};

export default HeroDesktop;

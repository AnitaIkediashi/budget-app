import React from "react";
import Navbar from "./Navbar";
import HeroWrapper from "./HeroWrapper";

const HeroDesktop = () => {
  return (
    <div className="h-[80vh] w-full  relative before:absolute before:content-['']  before:right-0 before:top-0 before:left-0 before:bottom-0 clip-path-bg hero-bg">
      <Navbar />
      <HeroWrapper />
    </div>
  );
};

export default HeroDesktop;

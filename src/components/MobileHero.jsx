import React from "react";
import CTA from "./CTA";

const MobileHero = () => {
  return (
    <section className="h-screen w-full overflow-x-hidden overflow-y-scroll mobile-hero-bg py-4 px-8 relative">
      <div className="w-full  animate-fade">
        <div className="flex flex-col absolute md:top-1/2 md:-translate-y-1/2 top-[10rem] left-[5rem] right-[5rem]  md:left-8 md:-translate-x-0">
          <h2 className="text-white font-bold md:text-4xl text-2xl leading-[2.5rem] text-center md:text-left md:max-w-[30rem] max-w-[28rem] mx-auto md:mx-0">
            Master Your Finances With Our Budgeting App:
          </h2>
          <p className="text-dull-white md:text-xl text-sm font-medium py-4  text-center md:text-left md:max-w-[28rem] max-w-[20rem] mx-auto md:mx-0">
            Track Your Expenses, Save Money, and Reach Your Financial Goals
          </p>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default MobileHero;

import React from "react";
import CTA from "./CTA";

const MobileHero = () => {
  return (
    <section className="h-screen w-full overflow-hidden mobile-hero-bg relative flex items-center justify-center md:justify-start px-8">
      <div className="w-full md:-mt-72 -mt-48">
        <div className="flex flex-col ">
          <h2 className="text-white font-bold md:text-4xl text-3xl md:max-w-[30rem] max-w-[25rem] leading-[2.5rem]">
            Master Your Finances With Our Budgeting App:
          </h2>
          <p className="text-dull-white md:text-xl text-lg font-medium py-4 md:max-w-[28rem] max-w-[25rem]">
            Track Your Expenses, Save Money, and Reach Your Financial Goals
          </p>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default MobileHero;

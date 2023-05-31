import React from "react";
import CTA from "./CTA";

const MobileHero = () => {
  return (
    <section className="h-screen  overflow-hidden mobile-hero-bg relative flex items-center justify-center md:justify-start px-4">
      <div className="flex flex-col -mt-12">
        <h2 className="text-white font-bold md:text-4xl text-2xl md:max-w-[30rem]">
          Master Your Finances With Our Budgeting App:
        </h2>
        <p className="text-dull-white md:text-xl text-lg font-medium py-4 md:max-w-[28rem]">
          Track Your Expenses, Save Money, and Reach Your Financial Goals
        </p>
      </div>
      <CTA />
    </section>
  );
};

export default MobileHero;

import React from "react";
import HomeImg from '../assets/images/home-img.png'

const HeroWrapper = () => {
  return (
    <section className="h-[calc(80vh-5rem)] w-full px-8 lg:px-[7%] flex items-center justify-center relative pt-10">
      <div className="h-full grid grid-cols-2 items-center gap-3">
        {/* content */}
        <div className="flex flex-col -mt-14">
          <h2 className="text-white font-bold text-5xl leading-[3.5rem]">
            Master Your Finances With Our Budgeting App:
          </h2>
          <p className="text-dull-white text-2xl font-medium py-4 ">
            Track Your Expenses, Save Money, and Reach Your Financial Goals
          </p>
          <div>
            <a href="" className="bg-light-green px-6 py-2 font-bold text-lg rounded-md">
              Learn More
            </a>
          </div>
        </div>
        {/* image */}
        <img
          src={HomeImg}
          alt="hero bg"
          className="drop-shadow-[0px_11px_7px_rgba(0,0,0,0.3)] block lg:pt-10 xl:pt-0"
        />
      </div>
    </section>
  );
};

export default HeroWrapper;

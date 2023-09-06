import React from "react";
import Header from "./Header";
import IMG1 from '../assets/images/service-three.jpg'
import IMG2 from '../assets/images/service-one.jpg'
import { features } from "../data";
import Card from "../utils/Card";


const Features = () => {

  return (
    <section className="py-14 px-8 lg:px-[7%]" id="features">
      {/* heading */}
      <Header title="Features" />
      <p className="text-center max-w-xl mx-auto py-4 text-dark-green text-lg font-medium mb-10">
        Budget App allows you to track your expenses, either manually or through
        a means of card
      </p>
      <div className="grid grid-cols-2 items-center gap-5 h-full">
        <div className="grid grid-cols-3">
          {/* image */}
          <div className="col-start-1 col-end-3 row-start-1 row-end-3">
            <img
              src={IMG1}
              alt="first img"
              className="brightness-75 rounded-md blur-[2px]"
            />
          </div>
          <div className="col-start-2 col-end-4 row-start-2 row-end-4 ">
            <img
              src={IMG2}
              alt="second img"
              className="brightness-75 rounded-md "
            />
          </div>
        </div>
        <div>
          {/* features */}
          {features.map(({ icon, desc, title }, index) => (
            <Card
              className="flex items-center justify-center mb-5 flex-col"
              key={index}
            >
              <div className="text-white w-6 h-6">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-center text-dull-white">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

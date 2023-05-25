import React from "react";
import Header from "./Header";
import { reviews } from "../data";

const Testimonials = () => {
  return (
    <section className="py-14 px-8 lg:px-[7%] ">
      {/* heading */}
      <Header title="Customers' Review" />
      <p className="text-center max-w-sm mx-auto py-4 text-dark-green text-lg font-medium mb-10">
        We keep and customers happy and delighted to share their reviews.
      </p>
      {/* carousel */}
      <div className="w-[90%] h-[400px] mx-auto overflow-hidden">
        <ul className="flex w-[calc(400px_*_5)] animate-scroll">
          {
            reviews.map(({quoteImg, userImg, para, occupation, userName}, index) => (
              <li key={index} className="w-96 h-[400px] mx-7 flex flex-col gap-4 p-4 bg-light-blue shadow-lg relative rounded-md overflow-auto">
                <div className="w-12 h-12 grid place-items-center shadow-lg rounded-full bg-dull-white">
                  <img src={quoteImg} alt="quote"  />
                </div>
                <p className="text-dull-white  italic text-lg py-8 ">{para}</p>
                <div className="grid grid-cols-[60px_1fr] gap-4 items-center">
                  <div className="w-full h-[60px]">
                    <img src={userImg} alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{userName}</h4>
                    <small className="font-medium text-dull-white">{occupation}</small>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;

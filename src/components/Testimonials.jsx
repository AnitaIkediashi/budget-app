import React from "react";
import Header from "./Header";

const Testimonials = () => {
  return (
    <section className="py-14 px-8 lg:px-[7%] ">
      {/* heading */}
      <Header title="Customers' Review" />
      <p className="text-center max-w-sm mx-auto py-4 text-dark-green text-lg font-medium mb-10">
        We keep and customers happy and delighted to share their reviews.
      </p>
      {/* carousel */}
      <div className="w-[90%] h-[400px] mx-auto bg-red-600">

      </div>
    </section>
  );
};

export default Testimonials;

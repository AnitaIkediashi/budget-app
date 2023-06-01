import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="absolute bottom-40 md:bottom-[33rem] left-8 right-8">
      <div className=" flex gap-4 md:flex-row flex-col">
        <button className="text-white bg-dark-green px-6 py-2 font-bold md:text-lg text-base rounded-md ">
          <Link to="/login">Login</Link>
        </button>
        <button className="text-white  bg-dark-green px-6 py-2 font-bold md:text-lg text-base rounded-md">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default CTA;

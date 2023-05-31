import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="absolute md:top-[27rem] top-[30rem] flex gap-4 md:flex-row flex-col w-[90%] md:w-0">
      <button className="text-white bg-dark-green px-6 py-2 font-bold md:text-lg text-base rounded-md ">
        <Link to="/login">Login</Link>
      </button>
      <button className="text-white  bg-dark-green px-6 py-2 font-bold md:text-lg text-base rounded-md">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default CTA;

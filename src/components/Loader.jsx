import React from "react";
import ReactDOM from "react-dom";
import loader from '../assets/gif/money-piggy-bank.gif'

const Loader = () => {
  return ReactDOM.createPortal(
    <section className="fixed top-0 bottom-0 right-0 left-0 z-[350] bg-[rgba(0,0,0,0.3)] flex items-center justify-center  ">
      <div className="shadow-lg rounded-lg">
        <img src={loader} alt="loading..." className="lg:w-44 md:w-32 w-20 rounded-lg" />
      </div>
    </section>,
    document.getElementById("loader")
  );
};

export default Loader;

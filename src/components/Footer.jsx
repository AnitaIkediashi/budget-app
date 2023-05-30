import React from "react";
import logo from "../assets/images/piggy-bank.png";

const Footer = () => {
  return (
    <footer className=" px-8 py-4 lg:px-[7%] h-24 w-full bg-light-green flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="logo"  />
          <h1 className="inline-block font-extrabold lg:text-3xl md:text-2xl text-xl text-black">
            BUDGET
          </h1>
        </a>
        <small className="text-black">Copyright &copy; Anita Ikediashi, 2023</small>
      </div>
    </footer>
  );
};

export default Footer;

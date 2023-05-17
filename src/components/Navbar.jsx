import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navLinks } from "../data";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  

  return (
    <header className="px-8 lg:px-[7%] h-20 w-full">
      <nav className="h-full flex justify-between items-center">
        {/* logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="inline-block -ml-2 font-extrabold lg:text-3xl md:text-2xl text-xl text-white">
            BUDGET
          </h1>
        </a>
        {/* nav links */}
        <ul className={`flex items-center gap-8`}>
          {navLinks.map(({ link, title }, index) => (
            <li
              key={index}
              className={`text-white text-lg font-medium hover:text-dull-white duration-300 ease-in ${
                activeLink === index ? "text-dull-white " : ""
              }`}
              onClick={() => setActiveLink(index)}
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

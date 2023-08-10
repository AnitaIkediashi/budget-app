import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";
import Avtr from '../../assets/images/blank-profile.png'

const Theme = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center gap-6">
      <button onClick={toggleDarkMode}>
        {darkMode ? <MoonIcon className="w-6 " style={{color: "white"}} /> : <SunIcon className="w-6" />}
      </button>

      <img
        src={Avtr}
        alt="blank profile pic"
        className="w-12 rounded-full drop-shadow-lg lg:drop-shadow-md"
      />
    </div>
  );
};

export default Theme;

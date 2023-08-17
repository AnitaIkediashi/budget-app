import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";
import Avtr from '../../assets/images/blank-profile.png'

const Theme = ({ darkMode, toggleDarkMode, open, handleOpen }) => {

  return (
    <>
      <div className="flex items-center gap-6 ">
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <MoonIcon className="w-6 " style={{ color: "white" }} />
          ) : (
            <SunIcon className="w-6" />
          )}
        </button>

        <img
          src={Avtr}
          alt="blank profile pic"
          className="w-12 rounded-full drop-shadow-lg lg:drop-shadow-md cursor-pointer"
          onClick={handleOpen}
        />
      </div>

      <aside
        className={
          open ? "show_input hide_input dark:bg-slate-500" : "show_input"
        }
      >
        {/* input file */}
        <input
          type="file"
          name=""
          id=""
          className="block mb-2 dark:text-white"
          accept="image/*"
          // onChange={handleImage}
        />
        {/* button */}
        <button className="bg-color-green-200 capitalize px-5 py-2 rounded-lg text-dull-white font-semibold dark:bg-color-green-300">
          upload
        </button>
      </aside>
    </>
  );
};

export default Theme;

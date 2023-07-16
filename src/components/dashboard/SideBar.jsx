import React from "react";
import { Link } from "react-router-dom";
import DashLogo from '../../assets/images/logo.png'
import blankProfile from '../../assets/images/blank-profile.png'
import {
  HomeIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <>
      {/* desktop */}
      <div className="bg-color-green-300 h-full rounded-2xl shadow-[3px_4px_6px_0px_rgba(0,0,0,0.25)] lg:block hidden px-4 relative">
        {/* logo */}
        <div className="flex items-center justify-center w-full mt-3 mb-16">
          <Link to="/dashboard" className="flex items-center">
            <h2 className="inline-block -mr-3 text-color-white-100 font-extrabold text-xl ">
              BUDGET
            </h2>
            <img src={DashLogo} alt="dashboard logo" className="w-16 " />
          </Link>
        </div>
        {/* navigation  */}
        <ul className="flex flex-col gap-2 px-6">
          <Link
            to="/dashboard"
            className="hover:bg-color-green-50 hover:text-black p-3 rounded-lg duration-300 text-color-white-100 font-medium"
          >
            <li className="flex items-center gap-1 ">
              <HomeIcon className="w-6" />
              <span>Home</span>
            </li>
          </Link>
          <Link
            to="/login"
            className="hover:bg-color-green-50 hover:text-black p-3 rounded-lg duration-300 text-color-white-100 font-medium"
          >
            <li className="flex items-center gap-1">
              <ArrowRightOnRectangleIcon className="w-6" />
              <span>Login</span>
            </li>
          </Link>
          <li className="flex items-center gap-1 hover:bg-color-green-50 hover:text-black p-3 rounded-lg duration-300 text-color-white-100 font-medium">
            <ArrowLeftOnRectangleIcon className="w-6" />
            <span>Logout</span>
          </li>
        </ul>
        {/* user profile */}
        <aside className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center w-[60%]">
          <img
            src={blankProfile}
            alt="blank profile"
            className="w-12 rounded-full"
          />
          <div className="flex flex-col ">
            <h4 className="inline-block font-medium text-color-white-100">
              John Doe
            </h4>
            <small className="font-extralight text-color-green-50">
              Profession
            </small>
          </div>
        </aside>
      </div>

      {/* mobile */}
      <ul className="fixed left-1/2 -translate-x-1/2 bottom-10 bg-[rgba(0,0,0,0.3)] md:w-[15rem] w-[12rem] md:h-20 h-16 backdrop-blur-sm rounded-lg lg:hidden flex items-center justify-evenly md:gap-2">
        <li className="bg-color-green-300 rounded-full p-3 md:p-4">
          <Link to="/" className="text-color-white-100">
            <HomeIcon className="md:w-6 w-5" />
          </Link>
        </li>
        <li className="bg-color-green-300 rounded-full p-3 md:p-4">
          <Link to="/login" className="text-color-white-100">
            <ArrowRightOnRectangleIcon className="md:w-6 w-5" />
          </Link>
        </li>
        <li className="bg-color-green-300 rounded-full p-3 md:p-4">
          <Link to="/logout" className="text-color-white-100">
            <ArrowLeftOnRectangleIcon className="md:w-6 w-5" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;

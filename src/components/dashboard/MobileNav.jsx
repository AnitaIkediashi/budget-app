import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, HomeIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserAuth";
import { toast } from "react-toastify";

const MobileNav = ({ navigate }) => {
  const { signout } = useContext(UserContext);

  const handleLogout = async () => {
    console.log("signout");
    await signout();
    toast.success("Logout succesfull");
    navigate("/login");
  };

  return (
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
      <li
        className="bg-color-green-300 rounded-full p-3 md:p-4 text-color-white-100"
        onClick={handleLogout}
      >
        <ArrowLeftOnRectangleIcon className="md:w-6 w-5" />
      </li>
    </ul>
  );
};

export default MobileNav;

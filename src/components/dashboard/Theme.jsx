import { MoonIcon } from "@heroicons/react/24/outline";
import React from "react";
import Avtr from '../../assets/images/blank-profile.png'

const Theme = () => {
  return (
    <div className="flex items-center gap-6">
      <MoonIcon className="w-6" />
      <img src={Avtr} alt="blank profile pic" className="w-12 rounded-full drop-shadow-lg lg:drop-shadow-md" />
    </div>
  );
};

export default Theme;

import React, { useState } from "react";
import mobileLogin from '../assets/images/mobile-login.png'
import { ArrowLongRightIcon, EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const MobileLogin = () => {

  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full h-screen grid place-items-center ">
      <div className="w-full h-full ">
        {/* image */}
        <div className="w-full h-[40vh] grid place-items-center mb-16  md:pt-4">
          <img
            src={mobileLogin}
            alt="mobile login img"
            className="w-[25rem] drop-shadow-md"
          />
        </div>
        {/* content form*/}
        <form className="flex flex-col gap-5 px-8 bg-dark-blue w-full h-[60vh] rounded-tl-[5rem] rounded-tr-[5rem] pb-4">
          <h1 className="text-white font-bold md:text-3xl text-2xl mb-4 pt-8">
            Welcome Back!
          </h1>
          <div className="relative">
            <EnvelopeIcon className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white" />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-10 bg-transparent border-b-[#ebf2fa5a] caret-dark-blue text-white font-medium border-b outline-none focus:border-b-2 focus:border-b-dull-white"
            />
          </div>
          <div className="relative">
            {ShowPassword ? (
              <EyeIcon
                className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white"
                onClick={() => setShowPassword(!ShowPassword)}
              />
            ) : (
              <EyeSlashIcon
                className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white"
                onClick={() => setShowPassword(!ShowPassword)}
              />
            )}

            <input
              type={ShowPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-14 px-10 bg-transparent border-b-[#ebf2fa5a] caret-dark-blue text-white font-medium border-b outline-none focus:border-b-2 focus:border-b-dull-white"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-dull-white font-semibold text-2xl ">Login</h2>
            <button className="w-12 h-12 grid place-items-center bg-white rounded-full ">
              <ArrowLongRightIcon className="w-5" />
            </button>
          </div>
          <div className=" flex items-center gap-6 mt-4">
            <Link
              to="/register"
              className="text-dull-white text-sm underline underline-offset-4 font-light  duration-300"
            >
              Register
            </Link>
            <Link
              to="/forget"
              className="text-dull-white text-sm underline underline-offset-4 font-light  duration-300"
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MobileLogin;

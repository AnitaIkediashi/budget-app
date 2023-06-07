import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import registerImg from '../assets/images/register.png'
import {
  EnvelopeIcon,
  EyeSlashIcon,
  EyeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const RegisterDesktop = () => {

  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-dull-white px-8 w-full h-screen flex items-center justify-center ">
      <div className="w-[85%] h-[80vh] bg-white rounded-xl shadow-[6px_6px_12px_0px_rgba(0,0,0,0.2)] p-4 relative">
        <div className="w-16 float-left">
          <img src={logo} alt="logo" className="w-full " />
        </div>
        {/* content form */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <form className="lg:w-[19rem] xl:w-[30rem] flex flex-col gap-5 lg:mt-8">
            <h1 className="text-linear-grad text-4xl font-bold">
              Register Here!
            </h1>
            <div className="relative">
              <UserCircleIcon className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green" />
              <input
                type="text"
                placeholder="Name"
                className="w-full h-14 px-10 bg-[#e4f1da] caret-dark-green text-dark-blue font-medium focus:border-dark-blue outline-none focus:border rounded-lg "
              />
            </div>
            <div className="relative">
              <EnvelopeIcon className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green" />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 px-10 bg-[#e4f1da] caret-dark-green text-dark-blue font-medium focus:border-dark-blue outline-none focus:border rounded-lg "
              />
            </div>
            <div className="relative">
              {ShowPassword ? (
                <EyeIcon
                  className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green"
                  onClick={() => setShowPassword(!ShowPassword)}
                />
              ) : (
                <EyeSlashIcon
                  className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green"
                  onClick={() => setShowPassword(!ShowPassword)}
                />
              )}

              <input
                type={ShowPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 px-10 bg-[#e4f1da] caret-dark-green text-dark-blue font-medium focus:border-dark-blue outline-none focus:border rounded-lg"
              />
            </div>
            {/* submit button */}
            <button className="bg-dark-green py-3 font-semibold text-lg text-white rounded-lg hover:tracking-widest duration-300">
              Register
            </button>
          </form>
          {/* login link */}
          <p className="mt-16 text-center text-black text-sm">
            Have an account? <br />{" "}
            <Link
              to="/login"
              className="text-dark-green font-semibold text-base hover:tracking-widest duration-300"
            >
              LOGIN
            </Link>{" "}
          </p>
        </div>
        {/* image */}
        <div className=" lg:w-[28rem] xl:w-[30rem] h-[85%] absolute right-0 login-clip rotate-180 top-14 flex">
          <img
            src={registerImg}
            alt="Register img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterDesktop;

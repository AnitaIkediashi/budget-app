import React, { useState } from "react";
import logo from '../assets/images/logo.png'
import loginImg from '../assets/images/login.png'
import {
  EnvelopeIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const LoginDesktop = () => {

  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-dull-white px-8 w-full h-screen flex items-center justify-center ">
      <div className="w-[85%] h-[80vh] bg-white rounded-xl shadow-[6px_6px_12px_0px_rgba(0,0,0,0.2)] p-4 relative">
        <div className="w-16 float-right">
          <img src={logo} alt="logo" className="w-full " />
        </div>
        {/* image */}
        <div className=" lg:w-[28rem] xl:w-[40rem] h-[85%] absolute left-0 login-clip top-14 flex">
          <img
            src={loginImg}
            alt="login img"
            className="w-full h-full object-cover"
          />
        </div>
        {/* content  */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <form className="lg:w-[19rem] xl:w-[30rem] flex flex-col gap-5">
            <h1 className="text-linear-grad text-4xl font-bold">
              Welcome Back!
            </h1>
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
              Submit
            </button>
          </form>
          {/* forgot password  */}
          <Link
            to="/forgot"
            className="float-right mt-2 text-sm font-medium text-dark-blue hover:tracking-widest duration-300"
          >
            Forgot Password?
          </Link>
          {/* register link */}
          <p className="mt-16 text-center text-black text-sm">
            Don't have an account? <br />{" "}
            <Link
              to="/register"
              className="text-dark-green font-semibold text-base hover:tracking-widest duration-300"
            >
              SIGN UP
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginDesktop;

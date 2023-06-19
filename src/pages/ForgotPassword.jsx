import React from "react";
import forgetImg from '../assets/images/forget.png'
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="w-full h-screen grid place-items-center">
      <div className="lg:w-1/2 md:w-[60%] w-[95%] lg:h-[85vh] h-fit flex px-3 pt-3 pb-6 items-center justify-center flex-col rounded-xl shadow-morp">
        {/* image */}
        <div className="w-[16rem] xl:w-[20rem]">
          <img
            src={forgetImg}
            alt="forget password img"
            className="drop-shadow-lg w-full"
          />
        </div>

        {/* content */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-dark-blue font-bold md:text-3xl text-2xl">
            Reset Password
          </h2>
          <p className="text-center text-sm font-medium lg:text-base text-black">
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password
          </p>
          <div className="relative w-full mt-4">
            <EnvelopeIcon className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green" />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-10 bg-[#cde4b4] caret-dark-blue text-dark-blue font-medium focus:border-dark-blue outline-none focus:border rounded-lg "
            />
          </div>
          <button className="bg-dark-green text-white font-semibold text-sm md:text-lg py-3 w-full rounded-lg lg:mt-5 mt-3">
            Send Instruction
          </button>

          <div className="mt-10 self-start text-dark-blue font-semibold lg:text-lg md:text-base text-sm hover:underline duration-300 hover:tracking-widest">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

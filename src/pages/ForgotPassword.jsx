import React, { useContext, useState } from "react";
import forgetImg from '../assets/images/forget.png'
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const {resetEmail} = useContext(UserContext)
  const navigate = useNavigate()
  const handleReset = async(e) => {
    e.preventDefault()
    try {
      await resetEmail(email);
      toast.success('Password reset successful')
      navigate("/login");
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <section className="w-[90%] h-screen flex mx-auto items-center justify-center overflow-x-hidden">
      <div className=" lg:h-[95%] md:h-[60%] lg:w-1/2 m-auto flex px-3 pt-3 pb-6 items-center justify-center flex-col rounded-xl shadow-morp">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="bg-dark-green text-white font-semibold text-sm md:text-lg py-3 w-full rounded-lg lg:mt-5 mt-3"
            onClick={handleReset}
          >
            Send Instruction
          </button>

          <div className="mt-10 lg:mt-5 self-start text-dark-blue font-semibold lg:text-lg md:text-base text-sm hover:underline duration-300 hover:tracking-widest">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

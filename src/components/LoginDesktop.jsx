import React, { useContext } from "react";
import logo from '../assets/images/logo.png'
import loginImg from '../assets/images/login.png'
import {
  EnvelopeIcon,
  EyeSlashIcon,
  EyeIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import { toast } from "react-toastify";
import Loader from "./Loader";

const LoginDesktop = ({
  formValues,
  setFormValues,
  ShowPassword,
  setShowPassword,
  isLoading,
  setIsLoading,
  navigate,
}) => {

  const {signin} = useContext(UserContext)

  const { email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signin(email, password);
      setIsLoading(false);
      navigate("/dashboard");
      toast.success("Login successful");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };


  return (
    <>
      {isLoading && <Loader />}
      <section className="bg-dull-white px-8 w-full h-screen flex items-center justify-center ">
        <div className="w-[85%] h-[80vh] bg-white rounded-xl shadow-[6px_6px_12px_0px_rgba(0,0,0,0.2)] p-4 relative">
          <div className="w-16 float-right">
            <img src={logo} alt="logo" className="w-full " />
          </div>
          {/* image */}
          <div className=" lg:w-[28rem] xl:w-[30rem] h-[85%] absolute left-0 login-clip top-14 flex">
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
                  name="email"
                  value={email}
                  onChange={handleChange}
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
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {/* submit button */}
              <button
                type="submit"
                className="bg-dark-green py-3 font-semibold text-lg text-white rounded-lg hover:tracking-widest duration-300"
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
            {/* forgot password  */}
            <Link
              to="/forget"
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
                REGISTER
              </Link>{" "}
            </p>
          </div>
          <button className="bg-color-green-200 absolute bottom-16 right-8 p-3 rounded-full hover:bg-color-green-50 duration-300">
            <Link
              to="/"
              className="text-dull-white hover:text-black duration-300"
            >
              <HomeIcon className="w-6" />
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default LoginDesktop;

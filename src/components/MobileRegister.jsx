import React, { useContext } from "react";
import mobileRegister from "../assets/images/mobile-register.png";
import {
  ArrowLongRightIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import validate from "../validate";
import Loader from "./Loader";
import { toast } from "react-toastify";

const MobileRegister = ({
  ShowPassword,
  onChangePassword,
  formValues,
  setFormValues,
  isLoading,
  setIsLoading,
  error,
  setError,
  navigate,
}) => {
  const { signup, updateUser } = useContext(UserContext);

  const { email, name, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(formValues));
    setIsLoading(true);
    try {
      await signup(email, password);
      updateUser(name);
      setIsLoading(false);
      navigate("/login");
      toast.success("Sign up successful");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className="w-full h-screen grid place-items-center overflow-y-scroll">
        <div className="w-full h-full ">
          {/* image */}
          <div className="w-full h-[40vh] grid place-items-center mb-16 md:mb-32">
            <img
              src={mobileRegister}
              alt="mobile Register img"
              className="w-[25rem] md:w-[30rem] drop-shadow-md"
            />
          </div>
          {/* content form*/}
          <form className="flex flex-col gap-5 px-8 bg-dark-blue w-full md:h-[60vh] sm:h-full rounded-tl-[5rem] rounded-tr-[5rem] pb-8">
            <h1 className="text-white font-bold md:text-3xl text-2xl mb-4 pt-8">
              Register Here!
            </h1>
            <div className="relative">
              <UserCircleIcon className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                className="w-full h-14 px-10 bg-transparent border-b-[#ebf2fa5a] caret-dark-blue text-white font-medium border-b outline-none focus:border-b-2 focus:border-b-dull-white"
                onChange={handleChange}
              />
            </div>
            <p className="text-red-200 -my-3">{error.name}</p>
            <div className="relative">
              <EnvelopeIcon className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white" />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 px-10 bg-transparent border-b-[#ebf2fa5a] caret-dark-blue text-white font-medium border-b outline-none focus:border-b-2 focus:border-b-dull-white"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <p className="text-red-200 -my-3">{error.email}</p>
            <div className="relative">
              {ShowPassword ? (
                <EyeIcon
                  className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white"
                  // onClick={() => setShowPassword(!ShowPassword)}
                  onClick={onChangePassword}
                />
              ) : (
                <EyeSlashIcon
                  className="w-5 absolute left-0 top-1/2 -translate-y-1/2 text-dull-white"
                  // onClick={() => setShowPassword(!ShowPassword)}
                  onClick={onChangePassword}
                />
              )}

              <input
                type={ShowPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 px-10 bg-transparent border-b-[#ebf2fa5a] caret-dark-blue text-white font-medium border-b outline-none focus:border-b-2 focus:border-b-dull-white"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <p className="text-red-200 -my-3">{error.password}</p>
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-dull-white font-semibold text-2xl ">
                Register
              </h2>
              <button
                type="submit"
                className="w-12 h-12 grid place-items-center bg-white rounded-full "
                onClick={handleSubmit}
              >
                <ArrowLongRightIcon className="w-5" />
              </button>
            </div>
            <div className="mt-4">
              <Link
                to="/login"
                className="text-dull-white text-sm underline underline-offset-4 font-light  duration-300"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MobileRegister;

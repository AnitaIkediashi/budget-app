import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import registerImg from "../assets/images/register.png";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  EyeIcon,
  UserCircleIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import validate from "../validate";
import Loader from "./Loader";
import { toast } from "react-toastify";

const RegisterDesktop = ({
  ShowPassword,
  onChangePassword,
  formValues,
  setFormValues,
  isLoading,
  setIsLoading,
  error,
  setError,
  navigate
}) => {
  const { signup, updateUser } = useContext(UserContext);

  const {email, name, password} = formValues

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(formValues));
    setIsLoading(true)
    try {
      await signup(email, password);
      updateUser(name);
      setIsLoading(false)
      navigate("/login")
      toast.success('Sign up successful')
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  return (
    <>
      {isLoading && <Loader />}
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
                  name="name"
                  value={name}
                  className="w-full h-14 px-10 bg-[#e4f1da] caret-dark-green text-dark-blue font-medium focus:border-dark-blue outline-none focus:border rounded-lg "
                  onChange={handleChange}
                />
              </div>
              <p className="text-red-600 -my-3">{error.name}</p>
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
              <p className="text-red-600 -my-3">{error.email}</p>
              <div className="relative">
                {ShowPassword ? (
                  <EyeIcon
                    className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green"
                    // onClick={() => setShowPassword(!ShowPassword)}
                    onClick={onChangePassword}
                  />
                ) : (
                  <EyeSlashIcon
                    className="w-5 absolute left-3 top-1/2 -translate-y-1/2 text-dark-green"
                    // onClick={() => setShowPassword(!ShowPassword)}
                    onClick={onChangePassword}
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
              <p className="text-red-600 -my-3">{error.password}</p>
              {/* submit button */}
              <button
                type="submit"
                className="bg-dark-green py-3 font-semibold text-lg text-white rounded-lg hover:tracking-widest duration-300"
                onClick={handleSubmit}
              >
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
          <button className="bg-color-green-200 absolute bottom-16 left-8 p-3 rounded-full hover:bg-color-green-50 duration-300">
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

export default RegisterDesktop;

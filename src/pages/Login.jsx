import React from "react";
import { LoginDesktop, MobileLogin } from "../components";

const Login = () => {
  return (
    <>
      {/* desktop login */}
      <section className="hidden lg:block">
        <LoginDesktop />
      </section>

      {/* mobile login */}
      <section className="block lg:hidden">
        <MobileLogin />
      </section>
    </>
  );
};

export default Login;

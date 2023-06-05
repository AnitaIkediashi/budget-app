import React from "react";
import { LoginDesktop } from "../components";

const Login = () => {
  return (
    <>
      {/* desktop login */}
      <section className="hidden lg:block">
        <LoginDesktop />
      </section>

      {/* mobile login */}
      
    </>
  );
};

export default Login;

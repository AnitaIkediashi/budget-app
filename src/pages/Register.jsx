import React from "react";
import { MobileRegister, RegisterDesktop } from "../components";

const Register = () => {
  return (
    <>
      {/* desktop login */}
      <section className="hidden lg:block">
        <RegisterDesktop />
      </section>

      {/* mobile login */}
      <section className="block lg:hidden">
        <MobileRegister />
      </section>
    </>
  );
};

export default Register;

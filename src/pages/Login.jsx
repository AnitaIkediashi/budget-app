import React, { useState } from "react";
import { LoginDesktop, MobileLogin } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* desktop login */}
      <section className="hidden lg:block">
        <LoginDesktop
          ShowPassword={ShowPassword}
          setShowPassword={setShowPassword}
          formValues={formValues}
          setFormValues={setFormValues}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigate={navigate}
        />
      </section>

      {/* mobile login */}
      <section className="block lg:hidden">
        <MobileLogin
          ShowPassword={ShowPassword}
          setShowPassword={setShowPassword}
          formValues={formValues}
          setFormValues={setFormValues}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigate={navigate}
        />
      </section>
    </>
  );
};

export default Login;

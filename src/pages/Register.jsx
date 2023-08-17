import React, { useState } from "react";
import { MobileRegister, RegisterDesktop } from "../components";
import { useNavigate } from "react-router-dom";

const Register = ({
  
}) => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues]  = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const onChangePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* desktop login */}
      <section className="hidden lg:block">
        <RegisterDesktop
          ShowPassword={ShowPassword}
          // setShowPassword={setShowPassword}
          onChangePassword={onChangePassword}
          formValues={formValues}
          setFormValues={setFormValues}
          error={error}
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigate={navigate}
        />
      </section>

      {/* mobile login */}
      <section className="block lg:hidden">
        <MobileRegister
          ShowPassword={ShowPassword}
          // setShowPassword={setShowPassword}
          onChangePassword={onChangePassword}
          formValues={formValues}
          setFormValues={setFormValues}
          error={error}
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigate={navigate}
        />
      </section>
    </>
  );
};

export default Register;

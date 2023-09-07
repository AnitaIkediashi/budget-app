import React, { useContext } from "react";
import { UserContext } from "../../context/UserAuth";

const Greeting = () => {
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <h1 className="font-extrabold md:text-3xl text-xl text-color-green-300 pt-32 lg:pt-0 dark:text-gray-50">
      Welcome back, {user.displayName}
    </h1>
  );
};

export default Greeting;

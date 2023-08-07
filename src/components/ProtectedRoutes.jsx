import React, { useContext } from "react";
import { UserContext } from "../context/UserAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
  const { user } = useContext(UserContext);
  return (
    user ? children : <Navigate to="/login" />
  )
};

export default ProtectedRoutes;

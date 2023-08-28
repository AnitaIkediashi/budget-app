import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserAuth";

function ProtectedRoute({children}) {
  const {user} = useContext(UserContext)
  
  if(!user) {
    
    return <Navigate to="/login" />  
  }
  return children
}

export default ProtectedRoute;

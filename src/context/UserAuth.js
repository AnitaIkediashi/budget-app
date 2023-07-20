import React, { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'

export const UserContext = createContext()

const initialState = {
  loading: false,
  error: false
}

export const UserProvider = ({children}) => {
  //state 
  const [state, dispatch] = useReducer(AuthReducer, initialState)


  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}
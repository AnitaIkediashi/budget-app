import React, { createContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  
  function signup(email, password) {
    // console.log(auth);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUser(name) {
    return updateProfile(auth.currentUser, {displayName: name})
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <UserContext.Provider
      value={{
        signup,
        updateUser,
        signin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
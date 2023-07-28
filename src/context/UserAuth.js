import React, { createContext } from "react";
import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
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

  function signout() {
    return signOut(auth);
  }

  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function getCurrentUser() {
    
  }

  return (
    <UserContext.Provider
      value={{
        signup,
        updateUser,
        signin,
        signout,
        resetEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
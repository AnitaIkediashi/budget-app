import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({})

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    // console.log(auth);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateUser(name) {
    return updateProfile(auth.currentUser, {displayName: name})
  }


  function signout() {
    // console.log(auth);
    return signOut(auth);
  }

  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) {
        setUser(currentUser)
      } else {
        console.log("user not logged in")
      }
    })
    
  }, [user])

  return (
    <UserContext.Provider
      value={{
        signup,
        updateUser,
        signin,
        signout,
        resetEmail,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
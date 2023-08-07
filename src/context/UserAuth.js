import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState('')

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUser(name) {
    return updateProfile(auth.currentUser, {displayName: name})
  }

  function signin(email, password) {
    // console.log(auth);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    // console.log(auth);
    return signOut(auth);
  }

  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    //clean up function
    return () => {
      unsubscribe()
    }
  }, [])

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
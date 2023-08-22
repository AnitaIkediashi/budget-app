import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    // console.log(auth);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateUser(name) {
    return updateProfile(auth.currentUser, { displayName: name });
  }

  function signout() {
    // console.log(auth);
    return signOut(auth);
  }

  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function upload(file, currentUser, setLoading) {
    const storageRef = ref(storage, currentUser.uid);
    setLoading(true);
    
    
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);
    updateProfile(currentUser, { photoURL });
    toast.success("profile updated successfully");
    setLoading(false);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("user not logged in");
      }
    });
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        signup,
        updateUser,
        signin,
        signout,
        resetEmail,
        user,
        upload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

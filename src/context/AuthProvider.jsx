import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  updateProfile} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import toast from 'react-hot-toast';

const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true);
    const [users,setUsers] = useState(null)
    const provider = new GoogleAuthProvider();

    const signInGoogle = ()=>{
      setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUserEmail = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile =(displayName, photoURL)=>{
      return updateProfile(auth.currentUser,{displayName,photoURL})

    }




    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUsers(currentUser)
        setLoading(false)
      })
      return ()=>{
        unsubscribe()
      }
    },[])

    const signOutUser = () => {
  setLoading(true);
  return signOut(auth)
    .then(() => {
      toast.success("Logged out successfully");
    })
    .catch((err) => {
      toast.error(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
};





    const authinfo = {
    signInGoogle,
    createUserEmail,
    updateUserProfile,
    signInUser,
    signOutUser,
    loading,
    users,



    }
   
   
   
    return (
      <AuthContext value={authinfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;
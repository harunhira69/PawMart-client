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
      })
      return ()=>{
        unsubscribe()
      }
    },[])

    const signOutUser = ()=>{
      setLoading(true)
      return signOut(auth)
    }





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
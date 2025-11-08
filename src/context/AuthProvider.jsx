import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true);
    const [users,setUsers] = useState(null)
    const provider = new GoogleAuthProvider();

    const signInGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }

    const createUserEmail = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }





    const authinfo = {
    signInGoogle,
    createUserEmail,


    }
   
   
   
    return (
      <AuthContext value={authinfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;
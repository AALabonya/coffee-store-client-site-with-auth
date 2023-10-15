/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firbase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //create user 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logIn 

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google SignIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //signOut
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
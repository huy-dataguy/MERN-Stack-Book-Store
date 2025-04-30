import React, { createContext, use, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { set } from 'react-hook-form'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


// AuthProvider component to provide auth state and functions to the app
export const AuthProvide = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Regiter function to create a new user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    //Login function to sign in a user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }


    //Sing in with google function

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
        
    }

    //Logout function to sign out a user
    const logoutUser = async () => {
        return await signOut(auth)
    }

    //manage user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
                const {email, displayName, photoURL} = user
                const userData = {
                    email,
                    username: displayName,
                    photo: photoURL
                }
              // ...
            } else {
              // User is signed out
              // ...
            }
            setCurrentUser(user);
            setLoading(false);

        })

        return () => unsubscribe();
    }, [])

    const value = {
        currentUser,
        loading,
        registerUser, 
        loginUser, 
        signInWithGoogle,
        logoutUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}  
        </AuthContext.Provider>
    )
}




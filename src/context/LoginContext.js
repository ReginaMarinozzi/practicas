import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscrite = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        setLoading(false)

        return () => unsubscrite()
    }, [])

    return (
        <LoginContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
import { initializeApp} from 'firebase/app'
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjC88LdJRXSbvquw_sjtiXJO-PlxHq2hk",
    authDomain: "t-bank-app.firebaseapp.com",
    projectId: "t-bank-app",
    storageBucket: "t-bank-app.firebasestorage.app",
    messagingSenderId: "358958961321",
    appId: "1:358958961321:web:dfa3780bc306f6e3d28fb8",
};
initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()



// // apiKey: "AIzaSyDjC88LdJRXSbvquw_sjtiXJO-PlxHq2hk",
// // authDomain: "t-bank-app.firebaseapp.com",
// // projectId: "t-bank-app",
// // storageBucket: "t-bank-app.firebasestorage.app",
// // messagingSenderId: "358958961321",
// // appId: "1:358958961321:web:dfa3780bc306f6e3d28fb8",
// // measurementId: "G-RYPZTTN0GR"


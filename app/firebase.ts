import { initializeApp } from 'firebase/app';  
import {  
    getAuth,  
    initializeAuth,  
    signOut,  
    signInWithEmailAndPassword,  
    createUserWithEmailAndPassword,  
    getReactNativePersistence,  
} from 'firebase/auth';  
import AsyncStorage from '@react-native-async-storage/async-storage';  
import { getFirestore } from "@firebase/firestore";  

const firebaseConfig = {  
    apiKey: "AIzaSyCm5guZRZkiw1uBTXVt7OFvZLJh9oX84Hk",  
    authDomain: "alfa-bank-5b2d4.firebaseapp.com",  
    projectId: "alfa-bank-5b2d4",  
    storageBucket: "alfa-bank-5b2d4.appspot.com",  
    messagingSenderId: "894972716249",  
    appId: "1:894972716249:web:f79b023cfe953c51be0ac8",  
    measurementId: "G-VZTJY6Z69T"  
};  

const app = initializeApp(firebaseConfig);  

// Используйте AsyncStorage для управления состоянием аутентификации  
export const auth = initializeAuth(app, {  
    persistence: getReactNativePersistence(AsyncStorage)  
});  

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);  
export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);  
export const logout = () => signOut(auth);  
export const db = getFirestore();  
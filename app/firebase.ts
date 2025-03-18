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
    apiKey: "",  
    authDomain: "",  
    projectId: "",  
    storageBucket: "",  
    messagingSenderId: "",  
    appId: "",  
    measurementId: ""  
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

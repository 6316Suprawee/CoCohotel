import React, {useState, useEffect} from "react";
import firebaseConfig from "../config";
import { initializeApp } from 'firebase/app';
import app from '../config'; // ให้แน่ใจว่าคุณใช้ตำแหน่งไฟล์ที่ถูกต้อง
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [loading, setloading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setloading(false);
        })

    }, [])

    if (loading){
        return <p>loading...</p>;
    }

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
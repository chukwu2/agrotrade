
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI_QtQ8X9i-q_mGARvpPJiw6iWNlPcnOM",
    authDomain: "magnetic-alloy-406815.firebaseapp.com",
    projectId: "magnetic-alloy-406815",
    storageBucket: "magnetic-alloy-406815.appspot.com",
    messagingSenderId: "812329816435",
    appId: "1:812329816435:web:9cab42fe941d38d59cf506"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage }
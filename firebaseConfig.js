// Import the functions you need from the SDKs you need
import { initializeApp, firebase, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import "firebase/auth"
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW75j2khuU0NggRxBtF1WqVJVWdNDZGX4",
  authDomain: "red-hood-b2680.firebaseapp.com",
  projectId: "red-hood-b2680",
  storageBucket: "red-hood-b2680.appspot.com",
  messagingSenderId: "290479514746",
  appId: "1:290479514746:web:5763750256857f915747c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db, firebase};



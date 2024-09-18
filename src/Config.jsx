// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxo7jU9wgBWd2acMnnDabhb8I_OTA3v7s",
  authDomain: "authenticationproject-a209b.firebaseapp.com",
  projectId: "authenticationproject-a209b",
  storageBucket: "authenticationproject-a209b.appspot.com",
  messagingSenderId: "713260109859",
  appId: "1:713260109859:web:fca0a1bb2c0eca435c6196",
  measurementId: "G-EYX09B3H8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
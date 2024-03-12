// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDR0dQvCgbwr4YyZeu6WnXDyO7bj2Zn1nE",
  authDomain: "solaris-tech-ltd.firebaseapp.com",
  databaseURL: "https://solaris-tech-ltd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solaris-tech-ltd",
  storageBucket: "solaris-tech-ltd.appspot.com",
  messagingSenderId: "312815428256",
  appId: "1:312815428256:web:3f85dfc232c614ec0adfc5",
  measurementId: "G-4JB224LWQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

export default app;
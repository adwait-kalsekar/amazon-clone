// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0o2gTzX-8ausuK6HTtJ4h7QkOghG85lA",
    authDomain: "clone-4ad27.firebaseapp.com",
    projectId: "clone-4ad27",
    storageBucket: "clone-4ad27.appspot.com",
    messagingSenderId: "304956111530",
    appId: "1:304956111530:web:ed2ec454520014cc5eaed3",
    measurementId: "G-M0R3YX7B57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
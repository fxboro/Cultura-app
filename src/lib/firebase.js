// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEwb9cJMmoPkpTU2lNpggjv3KyKYEU26A",
  authDomain: "cultura-app-8bf1d.firebaseapp.com",
  projectId: "cultura-app-8bf1d",
  storageBucket: "cultura-app-8bf1d.firebasestorage.app",
  messagingSenderId: "706724270676",
  appId: "1:706724270676:web:8ee154a6567564349b93c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };

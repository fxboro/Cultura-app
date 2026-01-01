import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-rlINBb8Aw-7qJDLAQzRfsNC9W29QHsU",
  authDomain: "cultura-994e9.firebaseapp.com",
  projectId: "cultura-994e9",
  storageBucket: "cultura-994e9.firebasestorage.app",
  messagingSenderId: "790763326672",
  appId: "1:790763326672:web:6476c3a1c866c6ce82a2d5",
  measurementId: "G-47P6L29TLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export for use in other files
export { app, auth, db, provider, signInWithPopup };
import React from 'react';
import { auth, provider, signInWithPopup } from '../lib/firebase';

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-8">Welcome to Your App</h1>
        <button
          onClick={handleSignIn}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;

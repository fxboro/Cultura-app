import React from 'react';

const Hero = ({ onGetStartedClick }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-shadow-lg leading-tight">
        Build Something <span className="text-purple-400">Amazing</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
        This is your starting point for a great application. Let's make it shine.
      </p>
      <button
        onClick={onGetStartedClick}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;

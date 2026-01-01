import React from 'react';

const Features = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Discover the Features
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Here are some of the amazing features of your new application.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Feature One</h3>
            <p className="text-gray-400">A short description of the first feature.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Feature Two</h3>
            <p className="text-gray-400">A short description of the second feature.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Feature Three</h3>
            <p className="text-gray-400">A short description of the third feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Features;

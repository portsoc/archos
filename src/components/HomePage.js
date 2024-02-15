/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full mx-4">
        <h1 className="text-4xl text-white mb-8 text-center">Welcome to Computer Science Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
            <h2 className="text-2xl mb-4">Gates Test</h2>
            <p>Test your knowledge of gates by writing out truth tables.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
            <h2 className="text-2xl mb-4">Binary Operations</h2>
            <p>Test your knowledge of binary operations by solving problems.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
            <h2 className="text-2xl mb-4">Fetch-Execute Cycle</h2>
            <p>Test your understanding of the fetch-execute cycle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

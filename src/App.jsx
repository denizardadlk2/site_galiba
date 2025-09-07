import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState("Your React App is Live!");

  const handleButtonClick = () => {
    setMessage("Success! The app is running on your domain.");d
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          {message}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-sm mx-auto">
          This simple application confirms that your domain and hosting are set up correctly.
        </p>
        <button 
          onClick={handleButtonClick}
          className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;

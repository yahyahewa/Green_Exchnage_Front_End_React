// import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return ( <div className="flex items-center justify-center h-screen ">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found.</h1>
    <p className="text-lg text-white mb-6">
    Oops! The page you are looking for does not exist.
    </p>
    <Link
      className="bg-none border 
       text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      to="/"
    >
      Back to Home
    </Link>
  </div>
</div>
  );
};

export default NotFound;

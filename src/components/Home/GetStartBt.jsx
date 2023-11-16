import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
const GetStartBt = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <section className="mt-8">
      {userData ? (
        <Link
          to="/profile"
          className="px-16 py-3 m-6 overflow-hidden text-lg font-medium bg-jade-600 text-gray-200 border-2 border-jade-600 rounded hover:text-jade-600 group hover:bg-gray-50"
        >
          <span className="relative">Start Donate</span>
        </Link>
      ) : (
        <Link
          to="/login"
          className="px-16 py-3 m-6 overflow-hidden text-lg font-medium bg-jade-600 text-gray-200 border-2 border-jade-600 rounded hover:text-jade-600 group hover:bg-gray-50"
        >
          <span className="relative">Get Started</span>
        </Link>
      )}
    </section>
  );
};

export default GetStartBt;

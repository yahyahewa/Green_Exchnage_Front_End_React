import React from "react";

const Filter = () => {
  return (
    <div className="w-1/3 ml-auto bg-gray-500 h-12 ">
      <select className="  block bg-white w-full px-3 border border-jade-500 rounded-md py-2  pr-3 shadow-sm md:text-lg focus:outline-none focus:border-jade-500 focus:ring-jade-500 focus:ring-1 text-sm">
        <option> Category</option>
        <option value="">Filter</option>
        <option value="">filter</option>
        <option value="">filter</option>
        <option value="">filter</option>
      </select>
    </div>
  );
};

export default Filter;

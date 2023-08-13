import React from "react";
import GetStartBt from "./GetStartBt";

const GetStart = () => {
  return (
    <div className="pt-14 flex items-center flex-col">
      <h1 className="pb-4 text-3xl sm:text-4xl font-extrabold  text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400">
        Start Donating Your unused things
      </h1>
      <GetStartBt />
    </div>
  );
};

export default GetStart;

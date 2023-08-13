import React from "react";

const Hero = () => {
  return (
    <section className="max-w-4xl ">
      <div className="flex flex-col items-center justify-center md:pt-24 pt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400">
          One person's Trash is another person's Treasure
        </h1>
        <p className="mt-4 px-4 text-md  text-center text-lg  text-gray-900">
          You protect the environment by giving what you no longer need
        </p>
      </div>
    </section>
  );
};

export default Hero;

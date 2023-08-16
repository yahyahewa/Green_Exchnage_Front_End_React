import React from "react";

const Hero = () => {
  return (
    <section className="pt-14 flex items-center flex-col">
      <div className="flex flex-col items-center justify-center md:pt-24 pt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center  from-gray-800 ">
          One person's Trash is another person's Treasure
        </h1>
        <p className="mt-4 px-4 pb-4 text-md  text-center text-lg  text-gray-900">
          You protect the environment by giving what you no longer need
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Hero from "../components/Home/Hero";
import Slideer from "../components/Home/Slideer";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <Slideer />
    </div>
  );
};

export default Home;

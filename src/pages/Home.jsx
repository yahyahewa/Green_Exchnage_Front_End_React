import React from "react";
import Hero from "../components/Home/Hero";
import Slideer from "../components/Home/Slideer";
import Blogs from "../components/Home/Blogs";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />

      <Slideer />
      <Blogs />
    </div>
  );
};

export default Home;

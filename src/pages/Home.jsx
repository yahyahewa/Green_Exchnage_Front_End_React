// import React from "react";
import Hero from "../components/Home/Hero";
import Slideer from "../components/Home/Slideer";
import Blogs from "../components/Home/Blogs";
import GetStart from "../components/Home/GetStart";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <Slideer />
      <GetStart />
      <Blogs />
    </div>
  );
};

export default Home;

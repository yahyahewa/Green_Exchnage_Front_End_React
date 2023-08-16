import React from "react";
import Hero from "../components/Home/Hero";
import SliderComponent from "../components/Home/SliderComponent";
import Blogs from "../components/Home/Blogs";
import GetStart from "../components/Home/GetStart";
const Home = () => {
  return (
    <div>
      <Hero />
      <SliderComponent />
      <GetStart />
      <Blogs />
    </div>
  );
};

export default Home;

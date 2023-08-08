import React from "react";
import { Route, Routes } from "react-router-dom";

// pages and components
import Home from "../pages/Home";
import Items from "../pages/Items";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Support from "../pages/Support";
import SingleItem from "../pages/SingleItem";
import Navbar from "../components/navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<SingleItem />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Fotter />
    </>
  );
};

export default Router;

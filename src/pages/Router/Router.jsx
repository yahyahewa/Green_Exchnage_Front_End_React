import React from "react";
// import { Route, Routes } from "react-router-dom";

// pages and components
import Home from "../Home";
import Items from "../Items";
import Signup from "../Singup";
import About from "../About";
import Support from "../Support";
import SingleItem from "../SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<SingleItem />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

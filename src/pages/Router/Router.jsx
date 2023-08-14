import React from "react";
// import { Route, Routes } from "react-router-dom";

// pages and components
import Home from "../Home";
// import Items from "../Items";
import Signup from "../Singup";
// import About from "../Contact";
// import Support from "../Support";
import SingleItem from "../SingleItem";
import Login from "../Login";

import {  Routes, Route } from "react-router-dom";
import Protect from "../../components/protect/Protect";
import Profile from "../Profile";
import NotAuthorized from "../../components/protect/NotAuthorized";
import NotFound from "../../components/NotFound";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/Fotter/Fotter";
import Products from "../Products";
import Contact from "../Contact";

const Router = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleItem />} />
        {/* <Route path="/support" element={<Support />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/403" element={<NotAuthorized/>}/>
        <Route element={<Protect/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Fotter/>
    </div>
      
  );
};

export default Router;

import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

// pages and components
import Home from "../Home";
import Items from "../Items";
import Signup from "../Singup";
import About from "../About";
import Support from "../Support";
import SingleItem from "../SingleItem";
import Login from "../Login";
import Fotter from "../../components/Fotter/Fotter";
import Protect from "../../components/protect/Protect";
import Profile from "../Profile";
import NotAuthorized from "../../components/protect/NotAuthorized";
import NotFound from "../../components/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<SingleItem />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/403" element={<NotAuthorized />} />
        <Route element={<Protect />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Fotter />
    </>
  );
};

export default Router;

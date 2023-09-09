// import React from "react";
// import { Route, Routes } from "react-router-dom";

// pages and components
// import Home from "../Home";
// import Items from "../Items";
// import Signup from "../Singup";
// import About from "../Contact";
// import Support from "../Support";
// import SingleItem from "../SingleItem";
// import Login from "../Login";

import {  Routes, Route } from "react-router-dom";
// import Protect from "../../components/protect/Protect";
// import Profile from "../Profile";
// import NotAuthorized from "../../components/protect/NotAuthorized";
// import NotFound from "../../components/NotFound";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/Fotter/Fotter";
// import Products from "../Products";
// import Contact from "../Contact";
import { Oval } from "react-loader-spinner";
import { Suspense, lazy } from "react";

const Home = lazy(() => import('../Home'));
const Products = lazy(() => import('../Products'));
const SingleItem = lazy(() => import('../SingleItem'));
const Contact = lazy(() => import('../Contact'));
const Signup = lazy(() => import('../Singup'));
const Login = lazy(() => import('../Login'));
const Profile = lazy(() => import('../Profile'));
const NotFound = lazy(() => import('../../components/NotFound'));
const Router = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Routes> */}
      <Suspense fallback={<p className="h-screen flex justify-center items-center"><Oval
  height={100}
  width={100}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

        /></p>}>
          
          <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* TODO: uncomment this  */}
        {/* <Route path="/403" element={<NotAuthorized/>}/> */}
        {/* <Route element={<Protect/>}> */}
          <Route path="/profile" element={<Profile/>}/>
        {/* </Route> */}
        <Route path="*" element={<NotFound />} /></Routes>
</Suspense>
        {/* <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleItem />} /> */}
        {/* <Route path="/support" element={<Support />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        {/* TODO: uncomment this  */}
        {/* <Route path="/403" element={<NotAuthorized/>}/> */}
        {/* <Route element={<Protect/>}> */}
          {/* <Route path="/profile" element={<Profile/>}/> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      <Fotter/>
    </div>
      
  );
};

export default Router;

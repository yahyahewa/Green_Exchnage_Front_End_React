import React from "react";
// import Navbar from "../components/navbar/Navbar"
// import Sigin from "../components/login/Login"
// import { useFormik } from "formik";
import login from "../assets/images/login.svg"
import { Formik, Form, useFormik } from "formik";
import LoginForm from "../components/login/LoginForm"
import * as Yup from "yup";
import InputField from "../components/InputField/InputField";
function Login() {

  return (
    <>
  
      <div className="lg:mx-36 pt-10 grid grid-cols-2 items-start gap-20 h-screen">
        <div className="flex justify-center"><img src={ login} className="w-full h-[500px] object-cover" /></div>
        <LoginForm/>
         
       </div>
  
    {/* <Formik>
        <div className="w-full lg:w-fit">
          <p className="font-semibold text-lg text-gray-800 text-center">Log In </p>
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
            <div className="flex flex-col ">
              <label className="text-gray-800 font-english">Email</label>
              <InputField
            name="email"
            placeholder="Example@gmail.com"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
            ) : null}
            </div>
         
           
          
        
            <div className="mt-4 flex flex-col">
              <label className="text-gray-800 font-english">Password</label>
          <InputField
            name="password"
            placeholder="********"
            id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-400 text-sm ">
              {formik.errors.password}
            </div>
          ) : null}</div>
          

          <div className="mt-5">
            {" "}
            <button type="submit" className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500">submit </button>
              {/* // text={ */}
                {/* !loginIsLoading ? (
                  "Login"
                ) : (
                  <div className="flex justify-center items-center">
                    <ClipLoader
                      color="#F8FAFC"
                      size={20}
                      speedMultiplier={0.5}
                    />
                  </div>
                )
              }
              type="submit" */}
              {/* px={widthOfButton()} */}
            {/* /> */}
          {/* </div>
        </Form>
      </div>
    </Formik> */} 
  
  {/* <Navbar/> */}
  {/* <Sigin/> */}
  </>);
}

export default Login;

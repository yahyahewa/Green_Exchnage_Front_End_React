// import React, { useState } from "react";
import signup from "../assets/images/signup.svg"

import SignUpForm from "../components/signup/SignUpForm";
const Singup = () => {
  // create use state object for use data
  // const [formData, setFormData] = useState({});
  // const [page, setPage] = useState("first");
  return (
    <>
       <div className="lg:mx-36 pt-10 grid grid-cols-2 items-start gap-20 h-screen">
        <div className="flex justify-center"><img src={ signup} className="w-full h-[550px] object-cover" /></div>
       
         <SignUpForm/>
       </div>
    
      {/* <section className="flex flex-col justify-center items-center w-full min-h-[95vh] font-kurdish">
    <h1 className="text-3xl mt-3 font-kurdish bg-jade-200 rounded-full p-2 text-gray-600">
      Signup
    </h1>
    {page === "first" ? (
      <Firstpage
        formData={formData}
        setFormData={setFormData}
        wichPage={page}
        setWichPage={setPage}
      />
    ) : (
      <Secondpage
        formData={formData}
        setFormData={setFormData}
        wichPage={page}
        setWichPage={setPage}
      />
    )}
      </section> */}
    </>
  );
};

export default Singup;

import React from "react";
import { useState } from "react";
import Firstpage from "../components/signup/Firstpage";
import Secondpage from "../components/signup/Secondpage";
const Singup = () => {
  // create use state object for use data
  const [formData, setFormData] = useState({});
  const [page, setPage] = useState("first");
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[95vh] font-kurdish">
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
    </section>
  );
};

export default Singup;

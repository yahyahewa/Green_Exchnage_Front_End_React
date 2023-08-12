import React from "react";

const Slideer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-4">
      <img
        className=" w-20 rounded-ee-3xl rounded-ss-3xl shadow-md shadow-jade-500"
        src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      />

      <h3 className="font-bold text-neutral-600 ">Shnyar Abdulrahman</h3>
      <span className="mt-1 bg-jade-500/80 px-4 text-sm py-1 rounded-xl text-white capitalize">
        for donate
      </span>
      <img
        className="px-5 sm:max-w-md mt-6 pb-6"
        src="https://www.pngkey.com/png/full/12-126278_chair-png-bench.png"
      />
    </div>
  );
};

export default Slideer;

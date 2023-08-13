import React from "react";

const Slideer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:pt-24 pt-8">
      <img
        className=" w-20 rounded-ee-3xl rounded-ss-3xl shadow-md shadow-jade-500"
        src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      />

      <h3 className="font-bold text-neutral-600 ">Shnyar Abdulrahman</h3>
      <span className=" border-2 border-jade-500 px-4 text-sm py-1 rounded-2xl text-jade-600 capitalize">
        for donate
      </span>
      <img
        className="px-5 sm:max-w-md mt-6 pb-6"
        src="https://freepngimg.com/save/9637-armchair-png-image/1126x1188"
      />
    </div>
  );
};

export default Slideer;

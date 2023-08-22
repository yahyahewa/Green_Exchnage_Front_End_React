import React from "react";

import { FaEdit } from "react-icons/fa";
const Setting = () => {
  return (
    <form className="container  text-black  rounded ml-96 p-4">
      <div className=" flex flex-col justify-center items-center  ">
        <div className=" pb-12 ">
          <h2 className="text-xl capitalize font-semibold leading-7  mb-8 text-center  text-gray-900">
            Profile
          </h2>
          <div className=" flex justify-center items-center     flex-col gap-2">
            <img
              className=" rounded-full relative shadow-md shadow-jade-300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S3oXpuVGOo-8I4aUSXeISfD-FeizfJeePbLGR3o&s"
              alt=""
            />
            <button
              onClick={console.log("chnage image")}
              className="  text-2xl border-b-1  border-jade-400  text-jade-700 hover:text-jade-600"
            >
              <FaEdit className="w-full" />
            </button>
            <div className="flex items-center justify-center ">
              <h1 className="font-bold ">Ehsan Muhamad</h1>
            </div>
          </div>
        </div>
        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Full Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Name"
              autoComplete="full-name"
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Phone Number
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="phoneNumber"
              autoComplete="phone-number"
              className="bg-gray-100 peer appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>
        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              autoComplete="email"
              className="bg-gray-100 peer appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-1  items-center  justify-end   gap-x-8">
          <button
            type="button"
            className="rounded-md bg-gray-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-jade-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jade-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Setting;

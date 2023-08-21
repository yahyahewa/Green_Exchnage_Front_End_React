import React from "react";

import { FaEdit } from "react-icons/fa";
const Setting = () => {
  return (
    <form class="container flex justify-center flex-col  items-center  text-black  rounded ml-96 p-4">
      <div>
        <div className="space-y-12 flex flex-col justify-center items-center gap-7">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl capitalize font-semibold leading-7 mb-8 text-center  text-gray-900">
              Profile
            </h2>
            <div className=" flex justify-center items-center container   flex-col gap-2">
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
              <div className="flex items-center justify-center">
                <h1 className="font-bold ">Ehsan Muhamad</h1>
              </div>
              <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jade-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jade-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    location
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jade-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full ">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jade-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
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
      </div>
    </form>
  );
};

export default Setting;

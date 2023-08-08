import React from "react";
import { Cards } from "../../assets/Data";
const SingleCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7 md:px-10 pt-8 ">
      {Cards.map((card) => {
        const {
          id,
          DonatorName,
          ProfileImg,
          Date,
          Location,
          Img,
          Title,
          Desc,
        } = card;

        return (
          <div
            key={id}
            className="relative  flex  w-full max-w-[25rem] bg-gray-50 rounded-md mt-4 flex-col shadow-md"
          >
            <div className="py-3 px-6 flex items-center justify-between ">
              <div className="flex items-center justify-center gap-1.5 text-base font-normal   ">
                <img
                  className=" h-12 w-12 rounded-md object-cover "
                  src={ProfileImg}
                  alt="User Image"
                />
                <div className="  block">
                  <span className="  font-bold ">{DonatorName}</span>
                  <br />
                  <span className="  text-sm ">{Location}</span>
                </div>
              </div>

              <div className="block  ">
                <span className="font-sm ">{Date}</span> <br />
                <span className=" px-2 text-sm">Donator</span>
              </div>
            </div>
            <a className="relative flex  object-cover  items-center justify-center   cursor-pointer overflow-hidden rounded  bg-clip-border  ">
              <img src={Img} alt={Title} className="" href="#" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full " />

              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px]   select-none rounded-full text-center align-middle  text-xs font-medium     disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <img
                  src="https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png"
                  alt=""
                />
              </button>
            </a>
            <div className="p-6 ">
              <div className="mb-3 flex items-center justify-between ">
                <h1 className="block font-sans text-xl capitalize font-medium leading-snug  tracking-normal text-blue-gray-900 antialiased">
                  {Title}
                </h1>
              </div>
              <p className="block font-sans capitalize text-base font-light leading-relaxed text-gray-700 antialiased">
                {Desc}
              </p>
            </div>
            <div className="p-6 pt-3  justify-end items-end">
              <button
                className="block w-full  select-none rounded bg-jade-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-jade-500/20 transition-all hover:shadow-lg hover:shadow-jade-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Order
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCard;

import React, { useState } from "react";

function SingleItem() {
  const [islogin, setIsLoggedIn] = useState(false);
  return (
    <>
      {/* component */}
      <section className="text-gray-700    bg-white">
        <div className="container px-5 py-32 mx-auto ">
          <div className="lg:w-4/5 mx-auto   flex flex-wrap items-center ">
            <img
              alt={""}
              className="lg:w-1/2 w-full  object-cover object-center rounded-2xl border border-gray-200 "
              src="https://codecondo.com/wp-content/uploads/2016/11/Metasploit-The-Penetration-Testers-Guide-e1598449869321.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-24  lg:py-6 mt-6 lg:mt-0 ">
              <h1 className=" text-3xl capitalize  text-gray-700 tracking-widest">
                Book
              </h1>
              <h2 className="text-3xl capitalize  text-gray-700 tracking-widest">
                Ehsan muhamad
              </h2>
              <div className="  ">
                <span className="flex">
                  <span className="text-xl  text-gray-700 tracking-widest pt-4">
                    1/3/2023
                  </span>
                </span>
                <span className="flex">
                  <span className="text-xl capitalize  text-gray-700 tracking-widest pb-4">
                    Khurmal
                  </span>
                </span>
              </div>
              <span className="text-gray-900 text-xl tracking-wide capitalize font-bold">
                Description
              </span>
              <p className="leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat corporis labore accusantium placeat dicta eos vero earum
                tempora iure, ipsam pariatur adipisci? Sit, rerum nam sequi
                ratione placeat harum aliquid?
              </p>
              <div className=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <span className="text-gray-900 text-xl tracking-wide capitalize font-bold">
                  Note
                </span>
                <p className="leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat corporis labore accusantium placeat dicta eos vero
                  earum tempora iure, ipsam pariatur adipisci? Sit, rerum nam
                  sequi ratione placeat harum aliquid?
                </p>
              </div>
              <div className=" gap-4 flex items-center justify-start ">
                <a href="">
                  <img
                    className="w-20 rounded-md "
                    src="https://m.media-amazon.com/images/I/91TDrONQj2L._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                  />
                </a>

                <a href="">
                  <img
                    className="w-20 rounded-md"
                    src="https://m.media-amazon.com/images/I/91TDrONQj2L._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="w-20 rounded-md"
                    src="https://m.media-amazon.com/images/I/91TDrONQj2L._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <section className="  container mx-auto py-8 flex justify-end ">
            {islogin ? (
              <button
                onClick={""}
                className="px-10 bg-jade-600  text-white py-3 rounded-lg"
              >
                Order
              </button>
            ) : (
              <button
                onClick={""}
                className="px-10 bg-gray-300  text-gray-600 py-3 rounded-lg"
              >
                Please Login to Order
              </button>
            )}
          </section>
        </div>
      </section>
    </>
  );
}

export default SingleItem;

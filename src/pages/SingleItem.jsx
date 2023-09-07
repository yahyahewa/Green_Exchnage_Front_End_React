// import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";

import SingleItemSlider from "../components/SingleItemSlider/SingleItemSlider";
function SingleItem() {
  const { id } = useParams()
  console.log(id)
  // const [islogin, setIsLoggedIn] = useState(true);
  return (
    <>
      <section className="px-6 sm:px-12 lg:mx-26 md:px-20 flex text-neutral-500">
        <div className="py-32 grid md:grid-cols-2 gap-5 lg:gap-x-10">
        <SingleItemSlider/>
            {/* <img
              alt={""}
              className="w-full h-[500px] object-cover rounded"
              src="https://codecondo.com/wp-content/uploads/2016/11/Metasploit-The-Penetration-Testers-Guide-e1598449869321.png"
          />
           */}
          <div className="flex flex-col justify-between xl:w-3/4 ">
            <div className="flex justify-between items-end">
              <div >
              <h1 className="font-semibold text-3xl text-neutral-600 ">
                Book
                </h1>
                <p className="text-xl font-semibold mt-2">Category</p>
                 <h2 className="text-xl font-semibold mt-2">
                Ehsan muhamad
                 </h2>
            </div>
            
             <div className=" flex  ">
                <div className="flex items-center"><CgCalendarDates className="w-6 h-6" /> <span className="ml-2"> 1/1/2023</span></div>
                    
                <div className="ml-5 flex items-center">  <IoLocationSharp className="mr-2 w-5 h-5" /><span>khurmal</span> </div>
              
                    
             
              </div>
            </div>
           
             
              {/* <div className="font-semibold text-xl ">
                Description
              </div> */}
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat corporis labore accusantium placeat dicta eos vero earum
                tempora iure, ipsam pariatur adipisci? Sit, rerum nam sequi
                ratione placeat harum aliquid?
              </p>
              {/* <div className="">
                <div className="font-semibold text-xl mt-5">
                  Note
                </div>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat corporis labore accusantium placeat dicta eos vero
                  earum tempora iure, ipsam pariatur adipisci? Sit, rerum nam
                  sequi ratione placeat harum aliquid?
                </p>
            </div> */}
            <div className="flex flex-col">
              <div className="flex ">
                <span>Owner Phone number :</span>
                <span>0770 111 11 11</span>
              </div>
              <div className="flex ">
                <span>employee phone number :</span>
                <span>0770 111 11 11</span>
              </div>
            </div>
            {/* <button className="text-white bg-green py-2  rounded hover:bg-opacity-80 hover:duration-500 duration-500">Order</button> */}
            </div>
          </div>
      </section>
    </>
  );
}

export default SingleItem;

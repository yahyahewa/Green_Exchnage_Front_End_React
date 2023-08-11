import React from "react";
import { Cards } from "../../assets/Data";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
const SingleCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 justify-between items-center my-10">
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
          <Link to="">
            <div className="shadow-lg w-full border ">
            <div className="flex justify-between items-start p-4">
              <div className="flex j">
                <img
                  className="h-12 w-12 rounded-full object-cover "
                  src={ProfileImg}
                  alt="User Image"
                />
                <div className="flex flex-col ml-4">
                  <span className="font-bold">{DonatorName}</span>
                  
                  <span className=" flex items-center text-sm "><IoLocationSharp className="mr-1 text-green"/>{Location}</span>
                </div>
                </div>
             {/* <span className="flex  top-2 right-2 bg-white/80 rounded-full p-1  justify-center items-center">
                  <AiOutlineHeart className="w-7 h-7 text-red-500" />
                  </span> */}
              {/* <div className="flex flex-col ">
                <span className="font-sm ">{Date}</span>
                <span className=" px-2 text-sm">Donator</span>
              </div> */}
            </div>
               <h1 className="font-bold text-lg text-gray-800 px-4 pb-2 ">
              {Title}
              </h1>
              <div className="flex  overflow-hidden relative">
                <img src={Img} alt={Title} className=" flex object-cover w-full h-60 hover:scale-110 relative hover:duration-500  duration-500" />
                <button className="">
                  <span className="flex absolute top-2 right-2 bg-white/80 rounded-full p-1  justify-center items-center">
                  <AiOutlineHeart className="w-7 h-7 text-red-500" />
                  </span>
                </button>
               
              </div>
          
            
            
            

         
            
           
        
        
         
      

          </div>
          </Link>)})}
         
          </div>
  );
};

export default SingleCard;

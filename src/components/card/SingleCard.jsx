import React from "react";
import { Cards } from "../../assets/Data";
import { Link } from "react-router-dom";
const SingleCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 justify-between items-center my-10">
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
            <div className="shadow w-full">
            <div className="flex justify-between items-start p-4">
              <div>
                <img
                  className="h-12 w-12 rounded-md object-cover "
                  src={ProfileImg}
                  alt="User Image"
                />
                <div className="flex flex-col">
                  <span className="  font-bold ">{DonatorName}</span>
                  
                  <span className="  text-sm ">{Location}</span>
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="font-sm ">{Date}</span>
                <span className=" px-2 text-sm">Donator</span>
              </div>
            </div>
            <h1 className="block font-sans text-xl capitalize font-bold leading-snug  tracking-normal text-green px-4 pb-4">
              {Title}
            </h1>
            <img src={Img} alt={Title} className=" flex object-cover w-full h-60 " />
            
            
            

         
            
           
        
        
         
      

          </div>
          </Link>)})}
         
          </div>
  );
};

export default SingleCard;

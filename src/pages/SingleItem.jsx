// import React, { useState } from "react";
import {  useParams } from "react-router-dom";
function SingleItem() {
  const { id } = useParams()
  console.log(id)
  // const [islogin, setIsLoggedIn] = useState(true);
  return (
    <>
      {/* component */}
      <section className="text-gray-8 lg:mx-36">
        <div className="py-32 grid grid-cols-2 gap-5 lg:gap-x-10">
        
            <img
              alt={""}
              className="w-full h-[500px] object-cover rounded"
              src="https://codecondo.com/wp-content/uploads/2016/11/Metasploit-The-Penetration-Testers-Guide-e1598449869321.png"
          />
          
          <div className="flex flex-col justify-between xl:w-3/4">
            <div className="flex justify-between items-end">
              <div >
              <h1 className="font-semibold text-3xl ">
                Book
              </h1>
              <h2 className="text-xl font-semibold mt-2">
                Ehsan muhamad
              </h2>
            </div>
            
             <div className=" flex  ">
                <div>1/1/2023</div>
                <div className="ml-4">khurmal</div>
              
                    
             
              </div>
            </div>
           
             
              <div className="font-semibold text-xl mt-5">
                Description
              </div>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat corporis labore accusantium placeat dicta eos vero earum
                tempora iure, ipsam pariatur adipisci? Sit, rerum nam sequi
                ratione placeat harum aliquid?
              </p>
              <div className="">
                <div className="font-semibold text-xl mt-5">
                  Note
                </div>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat corporis labore accusantium placeat dicta eos vero
                  earum tempora iure, ipsam pariatur adipisci? Sit, rerum nam
                  sequi ratione placeat harum aliquid?
                </p>
            </div>
            <button className="text-white bg-green py-2  rounded hover:bg-opacity-80 hover:duration-500 duration-500">Order</button>
              {/* <div className=" gap-4 flex items-center justify-start ">
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
              </div> */}
            </div>
          </div>
          {/* <section className="  container mx-auto py-8 flex justify-end ">
            {islogin ? (
              <Link
                to=""
                className="px-10 bg-jade-600  text-white py-3 rounded-lg"
              >
                Order
              </Link>
            ) : (
              <Link
                to=""
                className="px-10 bg-gray-300  text-gray-600 py-3 rounded-lg"
              >
                Please Login to Order
              </Link>
            )}
          </section> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default SingleItem;

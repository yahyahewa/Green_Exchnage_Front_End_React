import React, { useState } from 'react'

function DropDown() {
 const filtersItems=["category1","category2","category3","category4"]

       const [isActive, setActive] = useState(false);
  const handleDropdownClick = () => setActive(!isActive);
  
//   const [changeState] = useChangeStateMutation()
  const changestateHandler = () => {
//     changeState({ status: status ,id:id})
//     console.log("data we send",{ status: status ,id:id})
  }
  return (
      <div>
       <div>
         <div className="relative inline-block ">
          <span>
            <button
              onClick={handleDropdownClick}
              className="inline-flex justify-center border-2 border-gray-400  w-80 py-2 rounded-lg text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none transition ease-in-out  duration-150"
            >
             ...
            </button>
          </span>
      
         <div
          className={`${
            isActive ? "block" : "hidden"
          } +origin-top-left absolute left-3 top-3 mt-2 z-50`}
        >
          <div className="rounded-md bg-white text-gray-600 shadow-lg flex flex-col justify-start items-start w-80">
              {filtersItems.map((item) => {
                   return (
                    //     item.name === "View Details" ?
                         //     <button
                         //            className={`block py-1 pl-3 w-full text-start rounded-sm text-sm hover:bg-gray-100`}
                         //     key={item.id} >{item.name}</button>
                         //     :
                  <button
                    key={item.id}
                         onClick={()=>handleDropdownClick()}
                    className={`  w-80   py-1 pl-3  text-start rounded-sm text-sm hover:bg-gray-100`}
                     >{ item}</button>
                );
              })}
                     {/* <button
                     onClick={()=>handleDropdownClick()}
                     className={`border-t-2 py-1 border-gray-100 block pl-3 text-start w-full rounded-sm text-sm  hover:bg-gray-100 `}
                     >cancel</button>                 */}
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default DropDown

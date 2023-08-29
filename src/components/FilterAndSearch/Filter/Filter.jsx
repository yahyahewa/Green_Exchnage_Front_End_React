/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useGetCategorySubCategoryQuery } from "../../../app/api/category";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Filter = ({ category, setCategory }) => {
  const { data: allCategory } = useGetCategorySubCategoryQuery();
  const containerRef = useRef(null);

  const [dataToMap, setDataToMap] = useState(allCategory?.data);
  const [activeCategory, setActiveCategory] = useState("");
  const [showLeftArow, setShowLeftArow] = useState(false);
  const [subcategoryy, setSubCategoryy] = useState();
  const [scrollAmount] = useState(500);
  console.log(dataToMap);
  const handleCategoryClick = (categoryId) => {
    if (categoryId === "") {
      setCategory("");
      setActiveCategory("");
    } else {
      setActiveCategory(categoryId?._id);
      if (categoryId?.subCategory) {
        let id = [];
        let cat = categoryId?.subCategory;
        setSubCategoryy(cat);
        for (let i = 0; i < cat?.length; i++) {
          id.push(cat[i]._id);
        }

        setCategory(id);
      } else {
        setCategory(categoryId._id);
      }
    }
  };

  const handleScroll = (direction) => {
    if (containerRef?.current?.scrollLeft >= 500 || direction === 1) {
      setShowLeftArow(true);
    } else {
      setShowLeftArow(false);
    }
    //   const scrollAmount = containerRef.current.offsetWidth;
    containerRef.current.scrollLeft += direction * scrollAmount;
  };
  useEffect(() => {
    if (category !== "") {
      setDataToMap(subcategoryy);
    } else {
      setDataToMap(allCategory?.data);
    }
  }, [dataToMap, setDataToMap, category, subcategoryy, allCategory]);
  // const ske= Array(10).fill(0).map((_, index) => {
  //   return <Skeleton key={ index} count={1}/>
  // })
  return (
    <div className="flex items-center relative px-2 lg:px-0">
      {showLeftArow === true && (
        <div
          className={`${
            showLeftArow === true ? "flex" : "hidden"
          }+ px-2 lg:px-0 justify-end bg-gradient-to-r h-full from-white w-14 absolute left-0  z-20`}
        >
          <button
            className="flex align-end mr-1 mt-[2px] display-none active:flex text-xl font-bold text-gray-600 focus:outline-none shadow bg-gray-100  hover:bg-gray-200 rounded-full items-center justify-center w-8 h-8 text-center"
            onClick={() => handleScroll(-1)}
          >
            &lt;
          </button>
        </div>
      )}
      <div className="flex flex-grow overflow-x-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 overflow-x-scroll no-scrollbar scroll-smooth"
            style={{ transform: "translateX(0)" }}
            ref={containerRef}
          >
            <NavLink
              key={1}
              className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit ${
                "" === activeCategory ? "bg-jade-500 text-white" : "bg-gray-50"
              }`}
              onClick={() => handleCategoryClick("")}
            >
              All
            </NavLink>
            {dataToMap?.map((category) => (
              <button
                key={category._id}
                className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit ${
                  category._id === activeCategory
                    ? "bg-jade-500 text-white"
                    : "bg-gray-50"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-gradient-to-l h-full from-white w-10  absolute right-0  z-20">
        <button
          className="flex align-end mr-1 mt-[2px]  display-none active:flex text-xl font-bold text-gray-600 focus:outline-none shadow bg-gray-100    hover:bg-gray-200 rounded-full   items-center justify-center w-8 h-8 text-center"
          onClick={() => handleScroll(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

//         <FormControl sx={{  minWidth: 170 }} size="small">
//         <Select
//           sx={{border:1.5, borderColor: 'grey.600', borderRadius: 1 }}
//           value={"All"}
//           onChange={handleChange}
//           displayEmpty
//           color="success"
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//               <MenuItem value="">
//                 <em> sub category</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl> */}
// {/*
//        <FormControl sx={{  minWidth: 170 }} size="small">
//         <Select
//           sx={{border:1.5, borderRadius: 1 }}
//           // eslint-disable-next-line react/prop-types
//           value={category===""?"All":category?.name}
//           onChange={handleChange}
//           displayEmpty
//           color="success"
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//             <MenuItem value={"All"}>
//               <em>All</em>
//             </MenuItem>
//           {allCategory?.data?.map((category) => {
//             // eslint-disable-next-line react/prop-types
//             return <MenuItem value={category._id} key={category._id}>{category?.name}</MenuItem>
//           })}

//             {/* <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem> */}
//         {/* </Select>
//       </FormControl> */}

export default Filter;

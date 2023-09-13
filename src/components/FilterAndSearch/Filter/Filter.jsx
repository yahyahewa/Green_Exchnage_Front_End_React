/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { useGetCategorySubCategoryQuery } from '../../../app/api/category';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';

const Filter = ({ category, setCategory, setPage }) => {
  const { data: allCategory } = useGetCategorySubCategoryQuery();
  const containerRef = useRef(null);

  const [dataToMap, setDataToMap] = useState(allCategory?.data);
  const [activeCategory, setActiveCategory] = useState('');
  const [showLeftArow, setShowLeftArow] = useState(false);
  const [subcategoryy, setSubCategoryy] = useState();
  const [scrollAmount] = useState(500);
  const handleCategoryClick = useCallback(
    (categoryId) => {
      if (categoryId === '') {
        setCategory('');
        setActiveCategory('');
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
          setPage(1);
        } else {
          setCategory(categoryId._id);
          setPage(1);
        }
      }
    },
    [setCategory],
  );

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
    if (category !== '') {
      setDataToMap(subcategoryy);
    } else {
      setDataToMap(allCategory?.data);
    }
  }, [dataToMap, setDataToMap, category, subcategoryy, allCategory]);
  return (
    <div className="flex items-center relative px-2 lg:px-0">
      {showLeftArow === true && (
        <div
          className={`${
            showLeftArow === true ? 'flex' : 'hidden'
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
            style={{ transform: 'translateX(0)' }}
            ref={containerRef}
          >
            <NavLink
              key={1}
              className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit ${
                '' === activeCategory ? 'bg-green text-white' : 'bg-gray-50'
              }`}
              onClick={() => handleCategoryClick('')}
            >
              All
            </NavLink>
            {dataToMap?.map((category) => (
              <button
                key={category._id}
                className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit ${
                  category._id === activeCategory
                    ? 'bg-green text-white'
                    : 'bg-gray-50'
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

export default Filter;

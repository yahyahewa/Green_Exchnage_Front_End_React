/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from 'react';
import { useGetCategorySubCategoryQuery } from '../../../app/api/category';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const Filter = ({ category, setCategory, setPage }) => {
  const language = useSelector((state) => state.language.language);
  const { data: allCategory } = useGetCategorySubCategoryQuery();
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('');
  console.log('active category ', activeCategory);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [scrollAmount] = useState(500);
  const [currentItems, setCurrentItems] = useState(allCategory?.data);

  const handleCategoryClick = useCallback(
    (clickedCategory) => {
      if (clickedCategory === activeCategory) {
        setCurrentItems(allCategory?.data);
        setActiveCategory('');
        setCategory('');
      } else {
        if (clickedCategory?.subCategory) {
          setActiveCategory(clickedCategory._id);
          setCurrentItems(clickedCategory?.subCategory);
          setCategory(clickedCategory.subCategory.map((subCat) => subCat._id));
        } else {
          setActiveCategory(clickedCategory._id);
          setCategory([clickedCategory._id]);
        }
        setPage(1);
      }
    },
    [setCategory, setPage],
  );

  const handleScroll = (direction) => {
    if (containerRef?.current?.scrollLeft >= 500 || direction === 1) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }
    containerRef.current.scrollLeft += direction * scrollAmount;
  };

  useEffect(() => {
    if (category === '') {
      setCurrentItems(allCategory?.data);
    }
  }, [activeCategory, allCategory, currentItems]);
  return (
    <div className="flex items-center relative px-2 lg:px-0">
      {showLeftArrow && (
        <div
          className={`${
            showLeftArrow === true ? 'flex' : 'hidden'
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
            <button
              className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit  ${
                '' === activeCategory ? 'bg-green text-white' : 'bg-gray-50'
              }`}
              onClick={() => handleCategoryClick('')}
            >
              All
            </button>
            {currentItems?.map((item) => (
              <button
                key={item._id}
                className={`py-2 px-4 mx-2 rounded focus:outline-none whitespace-nowrap h-fit ${
                  item._id === activeCategory
                    ? 'bg-green text-white'
                    : 'bg-gray-50'
                }`}
                onClick={() => handleCategoryClick(item)}
              >
                {item.name.find((name) => name.lang === language)?.name}
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

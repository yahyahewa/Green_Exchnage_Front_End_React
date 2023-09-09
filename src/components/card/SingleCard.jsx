import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useGetProductsQuery } from "../../app/api/products";
import { useMemo, useState } from "react";
import Banner from "../FilterAndSearch/Banner";
import SkeletonCards from "./SkeletonCards";
import { useCallback } from "react";


const SingleCard = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const { data: allProduct, isLoading } = useGetProductsQuery({ search, page, category });
  console.log(allProduct)

  const searchHandler = useCallback( (searchValue) => {
    setSearch(searchValue);
  },[])
   
 
   const memoizedData = useMemo(() => allProduct?.data || [], [allProduct]);
  if (isLoading) return <SkeletonCards cardNumber={9} />
  
  return (
    <div className="my-10">
      
    <Banner
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      searchHandler={() => searchHandler()}
    />
      {memoizedData.length == 0 ?
        <p className="min-h-screen text-center justify-center w-full flex text-lg mt-10 font-semibold text-gray-500">No Product</p>
        :
        <div className="gap-8  lg:grid px-4 md:grid-cols-2  xl:grid-cols-3 md:grid  xsm:grid-cols-1   ">
      { memoizedData.map((card) => {
        return (
          <Link to={`/products/${card._id}`} key={card._id}>
            <div className=" w-full  mt-5 hover:shadow-lg ">
              <div className="flex justify-between items-center p-1">
                <div className="flex my-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover "
                    src={`${import.meta.env.VITE_BACK_END}uploads/users/${card?.owner?.image}`}
                    alt="User Image"
                  />
                  <div className="flex flex-col ml-4 lg:ml-2">
                 
              
                    <span className="font-bold md:text-sm lg:text-lg whitespace-nowrap ">{card?.owner?.fullname }</span>

                    <span className=" flex items-center text-sm md:text-xs">
                      <IoLocationSharp className="mr-1 text-green " />
                      {card?.address.slice(0,10)}
                    </span>
                  </div>
                </div>

                <h1 className="font-bold md:text-sm lg:text-lg text-gray-800 px-4 pb-2 ">
                  {card?.name.slice(0,15)}
                </h1>
              </div>

              <div className="flex  overflow-hidden relative">
                <img
              src={`${import.meta.env.VITE_BACK_END}uploads/${card?.images[0]}`}
                  alt="products"
                  className=" flex object-cover w-full h-60 hover:scale-110 relative hover:duration-500  duration-500"
                />
                <button className="">
                 
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>}

    <div className="mt-10">
      <ReactPaginate
        className="flex items-center justify-center "
        breakLabel="..."
        nextLabel={
          <IoIosArrowDropright className="w-8 h-8 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
        }
        activeClassName="text-green"
        pageClassName="px-2 text-lg text-gray-800 hover:text-gray-500"
        onPageChange={(e) => {
          setPage(e.selected + 1);
        }}
        pageRangeDisplayed={5}
        pageCount={allProduct && allProduct?.results / 8}
        previousLabel={
          <IoIosArrowDropleft className="w-8 h-8 hover:text-green text-gray-700 duration-500 hover:duration-500 mx-2" />
        }
        renderOnZeroPageCount={null}
      />
    </div>
  </div>
  );
};

export default SingleCard;

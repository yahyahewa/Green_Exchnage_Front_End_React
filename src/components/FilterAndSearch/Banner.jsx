import React from "react";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";

const Banner = () => {
  return (
    <>
      <div className="md:w-full flex pt-4 items-center justify-center px-2">
        <Search />
        <Filter />
      </div>
    </>
  );
};

export default Banner;

import React from "react";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";

const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <Search />
        <Filter />
      </div>
    </>
  );
};

export default Banner;

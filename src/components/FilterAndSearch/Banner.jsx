import React from "react";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import DropDown from "../DropDown/DropDown";

const Banner = () => {
  return (
    <>
      <div className="md:w-full flex pt-4 items-center justify-between px-2">
        <Search />
        {/* <DropDown/> */}
        <Filter />
      </div>
    </>
  );
};

export default Banner;

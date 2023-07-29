const Search = () => {
  return (
    <div className="relative  flex ">
      <div className="absolute flex ml-2 items-center justify-start h-full">
        <img
          className="w-4 h-4 fill-current "
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          alt="search"
        />
      </div>
      <input
        type="text"
        placeholder="Search "
        className="placeholder:px-1 p-8 placeholder:italic  placeholder:text-gray-400 block bg-white w-full  border border-jade-500 rounded-md py-2  pr-4  shadow-sm   focus:outline-none focus:border-jade-500 focus:ring-jade-500 focus:ring-1 text-sm"
      />
    </div>
  );
};

export default Search;

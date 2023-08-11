const Search = () => {
  return (
    <div className="relative flex">
      <div className="absolute flex ml-2 items-center justify-start h-full">
        <img
          className="w-4 h-4 fill-current"
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          alt="search"
        />
      </div>
      <input
        type="text"
        placeholder="Search "
        className="placeholder:px-1 p-8 placeholder:italic  placeholder:text-gray-400 block bg-white   border-2 border-gray-400 rounded-md py-2 w-80  pr-2  shadow-sm   focus:outline-none focus:border-green focus:ring-green 0 text-sm"
      />
    </div>
  );
};

export default Search;

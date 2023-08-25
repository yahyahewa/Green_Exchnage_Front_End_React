// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch }) => {
  console.log(search)

  return (
    <div
      className="flex justify-center items-center w-full my-5">
      <div className="relative flex ">
      <div className="absolute flex ml-2 items-center justify-start h-full">
        <img
          className="w-4 h-4 fill-current"
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
          alt="search"
        />
      </div>
      <input
        onChange={(e)=>{setSearch(e.target.value)}}
        type="text"
        placeholder="Search "
        className="placeholder:px-1 p-8 placeholder:italic  placeholder:text-gray-400 block bg-white border-2 border-gray-400 rounded  w-80  pr-2  shadow-sm  py-2 focus:outline-none focus:border-green focus:ring-green 0 text-sm hover:border-gray-600"
      />
    </div></div>
   
  );
};

export default Search;

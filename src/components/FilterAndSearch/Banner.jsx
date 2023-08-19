import Search from "./Search/Search";
import Filter from "./Filter/Filter";


// eslint-disable-next-line react/prop-types
const Banner = ({search, setSearch, category, setCategory}) => {
  return (
    <>
      <div className="md:w-full flex pt-4 items-center justify-between px-2">
        <Search search={search} setSearch={setSearch}  />
        <Filter category={category} setCategory={setCategory} />
      </div>
    </>
  );
};

export default Banner;

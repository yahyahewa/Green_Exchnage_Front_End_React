import Search from './Search/Search';
import Filter from './Filter/Filter';

// eslint-disable-next-line react/prop-types
const Banner = ({ search, setSearch, category, setCategory }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Filter category={category} setCategory={setCategory} />
        <Search search={search} setSearch={setSearch} />
      </div>
    </>
  );
};

export default Banner;

import Search from './Search/Search';
import Filter from './Filter/Filter';

// eslint-disable-next-line react/prop-types
const Banner = ({ search, setSearch, category, setCategory, setPage }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Filter
          category={category}
          setCategory={setCategory}
          setPage={setPage}
        />
        <Search search={search} setSearch={setSearch} setPage={setPage} />
      </div>
    </>
  );
};

export default Banner;

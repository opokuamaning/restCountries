import Search from "./Search";
import Filter from "./Filter";
import Main from "./Main";

function Countries() {
  return (
    <>
      <div className="search-filter-wrapper">
        <Search />
        <Filter />
      </div>
      <Main />
    </>
  );
}

export default Countries;

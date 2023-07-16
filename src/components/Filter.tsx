import { useSearchCountries } from "../context/SearchCountry";
import "./Filter.css"
import { useToggler } from "../context/Toggler";
function Filter() {
  const {mode} = useToggler()
  const lightDarkMode = {backgroundColor: mode==='Light' ? 'white' : '#2B3844', color: mode==='Light' ? 'black' : '#fff'}
  const { setAllCountries } = useSearchCountries();
  const filterCountryHandler = (e:  React.ChangeEvent<HTMLSelectElement> ) => {
    console.log(e.target.value, "gh");
    if (e.target.value.trim() === "Filter by Region") {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data[0], countries);
          setAllCountries(data);
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0], countries);
        setAllCountries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="filter" >
      <div className="filter-div" >
        <select onChange={filterCountryHandler} style={lightDarkMode}>
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

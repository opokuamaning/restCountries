import { useSearchCountries } from "../context/SearchCountry";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useToggler } from "../context/Toggler";

const Search = () => {
  const {mode} = useToggler()
  const lightDarkMode = {backgroundColor: mode==='Light' ? 'white' : '#2B3844', color: mode==='Light' ? 'black' : '#fff'}
  const { setAllCountries } = useSearchCountries();
  const searchCountryHandler = (e: any) => {
    if (e.target.value.length > 0) {
      fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data[0], countries);
          if (data.length > 0) {
            setAllCountries(data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <div className="search-div" style={lightDarkMode}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="search"
          onChange={searchCountryHandler}
          className="search"
          placeholder="Search for a country"
          style={lightDarkMode}
        />
      </div>
    </div>
  );
};

export default Search;

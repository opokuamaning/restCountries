import { useSearchCountries } from "../context/SearchCountry"

const Search = () => {
  const {setAllCountries} = useSearchCountries()
  const searchCountryHandler = (e:any)=>{
    if(e.target.value.length > 0){
      fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0], countries);
                if(data.length > 0){
                  setAllCountries(data)
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
    }
  }
  return (
    <div>
      <div>
        <input type="search" onChange={searchCountryHandler} />
      </div>
    </div>
  )
}

export default Search
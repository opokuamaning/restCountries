import { useSearchCountries } from "../context/SearchCountry"
function Filter() {
    const {setAllCountries} = useSearchCountries()
    const filterCountryHandler = (e:any)=>{
        console.log(e.target.value, "gh")
        if(e.target.value.trim() === "Filter by Region"){
            fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0], countries);
                setAllCountries(data)
            })
            .catch((error) => {
                console.log(error)
            })
            return
        }
        fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data[0], countries);
                setAllCountries(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
  return (
    <div className='filter'>
        <select onChange={filterCountryHandler}>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    </div>
  )
}

export default Filter
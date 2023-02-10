import { useNavigate } from "react-router-dom"
import { useToggler } from "../context/Toggler"
function Card({country}:any) {
const navigate = useNavigate()
const {mode} = useToggler()
    const lightDarkMode = {backgroundColor: mode==='Light' ? 'white' : '#2B3844', color: mode==='Light' ? 'black' : '#fff'}
  return (
    <div className="card" onClick={()=>navigate(`${country.name.common}`, {state:{country}})} style={lightDarkMode}>
      <img src={country.flags.svg} alt="flag" className="country-flag"/>
      <div className="country-details">
      <h2>{country.name.common}</h2>
      </div>
      <div className="country-details">
        <span>Population: </span>
        <span>{country.population}</span>
      </div>
      <div className="country-details">
        <span>Region: </span>
        <span>{country.region}</span>
      </div>
      <div className="country-details">
        <span>Capital: </span>
        <span>{country.capital}</span>
      </div>
    </div>
  )
}

export default Card
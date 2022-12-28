import flag from "../assets/1280px-Flag_of_Germany.svg.png";
function Card({country}:any) {
  return (
    <div className="card">
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
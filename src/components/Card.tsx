import flag from "../assets/1280px-Flag_of_Germany.svg.png";
function Card({country}:any) {
  return (
    <div className="card">
      <img src={country.flags.svg} alt="flag" className="country-flag"/>
      <h2 className="country-details">{country.name.common}</h2>
      <div>
        <span className="country-details">Population: </span>
        <span className="country-details">{country.population}</span>
      </div>
      <div>
        <span className="country-details">Region: </span>
        <span className="country-details">{country.region}</span>
      </div>
      <div>
        <span className="country-details">Capital:</span>
        <span className="country-details">{country.capital}</span>
      </div>
    </div>
  )
}

export default Card
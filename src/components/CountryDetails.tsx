import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./CountryDetails.css";
import { useToggler } from "../context/Toggler";

function CountryDetails() {

  const {mode, toggleMode} = useToggler()
  const lightDarkMode = {backgroundColor: mode==='Light' ? 'white' : '#2B3844', color: mode==='Light' ? 'black' : '#fff'}
  const location = useLocation();
  console.log(location.state);
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = location.state.country;
  const f = Object.keys(name.nativeName)[0];
  const native = name.nativeName[`${f}`][`official`];

  const curr = Object.keys(currencies)[0];
  const currency = currencies[`${curr}`][`name`];

  const lang = Object.keys(languages);
  const language = languages[`${lang}`];
  console.log(native, 1);
  const navigate = useNavigate();
  return (
    <div className="main-div">
      <div className="backArrow" onClick={() => navigate(-1)} style={lightDarkMode}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        <span>Back</span>
      </div>
      <div className="detail-wrapper">
        <div className="flag">
          <img src={flags.svg} alt="flag" className="country-flag" />
        </div>
        <div className="details">
          <h2>{name.common}</h2>
          <div className="details-wrapper details-wrapper-1">
            <div className="actual-details">
              <span>Native name: </span>
              <span>{native}</span>
            </div>
            <div className="actual-details">
              <span>Population: </span>
              <span>{population}</span>
            </div>
            <div className="actual-details">
              <span>Region: </span>
              <span>{region}</span>
            </div>
            <div className="actual-details">
              <span>Sub Region: </span>
              <span>{subregion}</span>
            </div>
            <div className="actual-details">
              <span>Capital: </span>
              <span>{capital[0]}</span>
            </div>
          </div>
          <div className="details-wrapper">
            <div className="actual-details">
              <span>Top Level Domain: </span>
              <span>{tld[0]}</span>
            </div>
            <div className="actual-details">
              <span>Currencies: </span>
              <span>{currency}</span>
            </div>
            <div className="actual-details">
              <span>Languages: </span>
              <span>{language}</span>
            </div>
          </div>
          <div className="country-borders" >
            <span>Border Countries: </span>
            <div className="border-wrapper" >
              {borders &&
                borders.map((border: any) => (
                  <span key={border} className="border-coutries" style={lightDarkMode}>
                    {border} 
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;

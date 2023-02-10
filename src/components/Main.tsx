import { useState, useEffect } from "react"
import { useSearchCountries } from "../context/SearchCountry";
import Card from "./Card";
function Main() {
    const { countries, setAllCountries } = useSearchCountries()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0], countries);
                setAllCountries(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            })
    }, []);
    //console.log(countries, "fg")
    if(loading){
        return <h3>Loading...</h3>
    }
    if(error){
        return <h3>404 Error!!!</h3>
    }
    return (
            <>
                {
                countries.map((item: any) => {
                    return <Card key={item.name.common} country={item} />
                })
            }
            </>
            
    )
}

export default Main
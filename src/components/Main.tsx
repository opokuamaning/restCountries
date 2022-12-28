import { useState, useEffect } from "react"
import { useSearchCountries } from "../context/SearchCountry";
import Card from "./Card";
function Main() {
    const { countries, setAllCountries } = useSearchCountries()
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                //console.log(data[0], countries);
                setAllCountries(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    //console.log(countries, "fg")
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
import { createContext, useContext, useState } from "react";
export interface ICountries {
  [key: string]: any
}
type CountrySearchContext = {
  countries: ICountries[] | [];
  setAllCountries: (data:ICountries[] ) => void;
};
const CountrySearch = createContext({} as CountrySearchContext);
type countrySearchProviderProps = {
  children : React.ReactNode
}

export const CountrySearchProvider = ({ children }:countrySearchProviderProps) => {
  const [countries, setCountries] = useState<ICountries[] | []>([]);

  return (
    <CountrySearch.Provider
      value={{
        countries,
        setAllCountries: (data:ICountries[])=>setCountries(data)
      }}
    >
      {children}
    </CountrySearch.Provider>
  );
};

export const useSearchCountries = () => useContext(CountrySearch);

import { createContext, useContext, useState } from "react";

const CountrySearch = createContext({} as any);
type countrySearchProviderProps = {
  children : React.ReactNode
}
export const CountrySearchProvider = ({ children }:countrySearchProviderProps) => {
  const [countries, setCountries] = useState<any>([]);

  return (
    <CountrySearch.Provider
      value={{
        countries,
        setAllCountries: (data:any)=>setCountries(data)
      }}
    >
      {children}
    </CountrySearch.Provider>
  );
};

export const useSearchCountries = () => useContext(CountrySearch);
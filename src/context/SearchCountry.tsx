import { createContext, useContext, useState } from "react";
export interface ICountries {
  [key: string]: any
}
type CountrySearchContext = {
  countries: ICountries[] | [];
  searchBy: string | undefined;
  setAllCountries: (data:ICountries[] ) => void;
  setSearchBy: (data: string | undefined) => void;
};
const CountrySearch = createContext({} as CountrySearchContext);
type countrySearchProviderProps = {
  children : React.ReactNode
}

export const CountrySearchProvider = ({ children }:countrySearchProviderProps) => {
  const [countries, setCountries] = useState<ICountries[] | []>([]);
  const [searchBy, setSearchBy] = useState<string | undefined>(undefined);

  return (
    <CountrySearch.Provider
      value={{
        countries,
        searchBy,
        setSearchBy,
        setAllCountries: (data:ICountries[])=>setCountries(data)
      }}
    >
      {children}
    </CountrySearch.Provider>
  );
};

export const useSearchCountries = () => useContext(CountrySearch);

import "./App.css";
import "./main-style.css";
import Header from "./components/Header";
import Toggler from "./context/Toggler";
import { ChangeBackground } from "./components/ChangeBackground";
import { CountrySearchProvider } from "./context/SearchCountry";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Countries from "./components/Countries";
function App() { 

  return (
    <Toggler>
      <CountrySearchProvider>
      <ChangeBackground>
        <Header />
        {
          // countries.length > 0 &&
          <main>
            <Routes>
              <Route path="/" element={<Countries />} />
              <Route path="/:country" element={<CountryDetails />}/>
            </Routes>
          </main>
        }
      </ChangeBackground>
    </CountrySearchProvider>
    </Toggler>
  );
}

export default App;

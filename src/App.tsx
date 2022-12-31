import './App.css';
import './main-style.css'
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import { CountrySearchProvider } from './context/SearchCountry';
import Main from './components/Main';
function App() {
  // const [countries, setCountries] = useState<any>([]);

  return (
    <CountrySearchProvider >
      <div className="App">
        <Header />
        {
          // countries.length > 0 &&
          <main>
            <div className='search-filter-wrapper'>
              <Search />
              <Filter />
            </div>
            <Main />
          </main>
        }
      </div>
    </CountrySearchProvider>
  );
}

export default App;

import './App.css';
import './main-style.css'
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from "react";
function App() {
  const [countries, setCountries] = useState<any>([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0], countries);
      setCountries(data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[]);
  return (
    <div className="App">
     <Header />
     <main>
      {
        countries.map((item:any)=>{
          return <Card key={item.name.common} country={item}/>
        })
      }
     </main>
    </div>
  );
}

export default App;

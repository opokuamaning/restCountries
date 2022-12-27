import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./Header.css";
const Header = () => {
  const [changeMode, setChangeMode] = useState(
    {
      light: {
        backGroundColor: "white",
        color: "black",
        textMode: "Dark Mode"
      },
      dark:{
        backGroundColor: "black",
        color: "white",
        textMode: "Light Mode"
      }
    }
  );
  const [isDark, setIsDark] = useState(true);
  const [textMode, setTextMode] = useState("Dark Mode");
  const changeBackgroundColor = () =>{
    if (isDark){
      setTextMode("Light Mode")
      setIsDark((previousState)=>!previousState)
    }else{
      setTextMode("Dark Mode")
      setIsDark((previousState)=>!previousState)
    }

  }
  return (
    <header className='header'>
        <h1>
            Where in the world?
        </h1>
        <button onClick={changeBackgroundColor}><FontAwesomeIcon icon={faMoon} /> {textMode}</button>
    </header>
  )
}

export default Header
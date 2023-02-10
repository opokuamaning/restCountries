import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import { useToggler } from '../context/Toggler';
const Header = () => {
  const {mode, toggleMode} = useToggler()
    const lightDarkMode = {backgroundColor: mode==='light' ? 'white' : '#2B3844', color: mode==='light' ? 'black' : '#fff'}
  return (
    <header className='header' style={lightDarkMode}>
        <h1>
            Where in the world?
        </h1>
        <div onClick={()=>{toggleMode()}} className="changeMode"><FontAwesomeIcon icon={faMoon}/> {mode}</div>
    </header>
  )
}

export default Header
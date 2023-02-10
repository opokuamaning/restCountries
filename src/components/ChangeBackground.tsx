import React from 'react';
import {useToggler} from "../context/Toggler";
type toggleProvider = {
    children : React.ReactNode
  }
  // #2B3844
export const ChangeBackground = ({children}:toggleProvider) => {
    const {mode} = useToggler()
    const lightDarkMode = {backgroundColor: mode==='light' ? 'white' : '#202C36', color: mode==='light' ? 'black' : '#fff'}
    
  return (
    <div className="App" style={lightDarkMode}>
        {children}
    </div>
  )
}

import React from 'react';
import {useToggler} from "../context/Toggler";
type toggleProvider = {
    children : React.ReactNode
  }
  // #2B3844
export const ChangeBackground = ({children}:toggleProvider) => {
    const {mode} = useToggler()
    const lightDarkMode = {backgroundColor: mode==='Light' ? 'white' : '#202C36', color: mode==='Light' ? 'black' : '#fff'}
    
  return (
    <div className="App" style={lightDarkMode}>
        {children}
    </div>
  )
}

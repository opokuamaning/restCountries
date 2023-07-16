import React from 'react'
import { createContext, useContext, useState } from "react";
type ContextTogglerType = {
  mode: string;
  toggleMode: () => void;
};
export const ContextToggler = createContext({} as ContextTogglerType)
type toggleProvider = {
  children : React.ReactNode
}
const Toggler = ({children}:toggleProvider) => {
  const [mode, setMode] = useState('Light')
  return (
    <ContextToggler.Provider value={{mode, toggleMode: ()=> setMode((previousMode)=>previousMode === 'Light' ? 'Dark' : 'Light') }}>
      {children}
    </ContextToggler.Provider>
  )
}

export const useToggler = () => useContext(ContextToggler)

export default Toggler


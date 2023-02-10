import React from 'react'
import { createContext, useContext, useState } from "react";

export const ContextToggler = createContext({} as any)
type toggleProvider = {
  children : React.ReactNode
}
const Toggler = ({children}:toggleProvider) => {
  const [mode, setMode] = useState('light')
  return (
    <ContextToggler.Provider value={{mode, toggleMode: ()=> setMode((previousMode)=>previousMode === 'light' ? 'dark' : 'light') }}>
      {children}
    </ContextToggler.Provider>
  )
}

export const useToggler = () => useContext(ContextToggler)

export default Toggler


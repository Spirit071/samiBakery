import React, { useState } from 'react'
import './App.css'
import { Nav, Switch } from "./components"

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} w-full h-full absolute left-0 top-0 py-10 overflow-hidden`}>
      <h1 className={`italic text-5xl font-bold text-center text-black ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>Sami Bakery</h1> 
      {theme === 'light' ? (
        <Nav navStyle={"text-xl font-sm bg-gradient-to-r text-transparent bg-clip-text from-[#00139f] to-gray-800 px-5"}/>
      ):(
        <Nav navStyle={"text-xl font-sm bg-gradient-to-r text-transparent bg-clip-text from-[#34ffff] to-white px-5"}/>
      )}
      <Switch theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

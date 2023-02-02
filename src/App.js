import React, { useState } from 'react'
import Data from './Components/Data'
function App() {

  const [theme,setTheme] =useState(true)
  return (
    <div className={theme ? "light"  : "dark" }>
     <div className='btn'> <button onClick={() => setTheme(!theme)}> *</button> </div>
      <Data/>
    </div>
  )
}

export default App


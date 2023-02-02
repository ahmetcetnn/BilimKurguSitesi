import React from 'react'
import { SliderData } from './Components/SliderData'


function App() {
  return (
    <div>
    {SliderData.map((index) => {
      return(
        <div>
      <h1>{SliderData.Title}</h1>
      <a>{SliderData.Actors}</a>
      <a>{SliderData.Plot}</a>
      <img src={SliderData.Poster} alt="poster"/>
      </div>
      )
    })}
   
    </div>
  )
}

export default App

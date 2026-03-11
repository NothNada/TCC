import { useState } from 'react'
import './App.css'

function App() {

  fetch("http://localhost:3000/user").then(response => response.json()).then(data => console.log(data))
  

  return (
    <h1>
      start React
    </h1>


  )

}

export default App

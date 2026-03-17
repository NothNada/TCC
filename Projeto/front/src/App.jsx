import './App.css'


import Navbar from './components/Navbar'
import Route from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route />
      </BrowserRouter>
    </>
  )

}

export default App

import './App.css'


import Navbar from './components/Navbar'
import Route from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <header class="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-200 mb-800">
          <Navbar />
        </header>
        <Route />
      </BrowserRouter>
    </>
  )

}

export default App

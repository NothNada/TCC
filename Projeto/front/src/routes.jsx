
import { Route, Routes } from "react-router-dom"

import Home from './pages/homePage'
import Login from './pages/loginPage'
import NotFound from './pages/NotFoundPage'

function MRoute() {
  return (


    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Login} path="/login" />
      <Route Component={NotFound} path="*" />
    </Routes>

  )
}

export default MRoute

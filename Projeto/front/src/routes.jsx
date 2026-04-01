
import { Route, Routes } from "react-router-dom"

import Home from './pages/homePage'
import SignUp from './pages/signUpPage.jsx'
import Login from './pages/loginPage.jsx'
import NotFound from './pages/NotFoundPage'

function MRoute() {
  return (


    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={SignUp} path="/signup" />
      <Route Component={Login} path="/login" />
      <Route Component={NotFound} path="*" />
    </Routes>

  )
}

export default MRoute

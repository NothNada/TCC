import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './pages/homePage'


function MRoute(){
    return(

        
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={ <Home /> }/>    
        </Routes>    
        
        </BrowserRouter>
    )
}

export default MRoute
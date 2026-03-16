import { Link } from 'react-router-dom'

import Home from './pages/homePage'


function Navbar(){
    return (
        <nav>
            <Link to='/home'>
                home
            </Link>
        </nav>
    )

}

export default Navbar
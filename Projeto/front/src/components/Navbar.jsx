import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white px-4 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-lg font-bold">Check-IA</h1>



          <nav>
            <div className=" font-bold pr-40">

              <Link to='/'>
                | home
              </Link>

              <Link to='/Signup'>
                | Sign-UP
              </Link>
              <Link to='/login'>
                | login
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )

}

export default Navbar

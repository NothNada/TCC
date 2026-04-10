import { Link } from "react-router-dom"

function GoHome(props){
    console.log(props)
  return (
    <Link to='/' className="text-2xl pl-2 text-black">
      {props.children}
    </Link>


  )

}

export default GoHome
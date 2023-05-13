import {Link, NavLink} from "react-router-dom"
function Navbar() {
 
  const Style={
     color: "black"
  }
  const activeStyle={
    color: "blue"
  }

  return (
   <div>
 
    <NavLink 
    style={({isActive})=>(isActive ? activeStyle : Style)}
    to="/">Home</NavLink>
    <NavLink
    style={({isActive})=>(isActive ? activeStyle : Style)}
    to="/About">About</NavLink>
     {/* <a href="/products"> products</a> */}
     <NavLink
     style={({isActive})=>(isActive ? activeStyle : Style)}
     to="/User">User</NavLink>
    
    </div>
  )
}

export default Navbar;

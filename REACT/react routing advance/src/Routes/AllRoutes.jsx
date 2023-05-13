 import {Routes, Route} from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import User from "../Pages/User"
import UserPage from "../Pages/UserPage"

function AllRoutes(){
  return (
      <>
   
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/User" element={<User/>}/>
      <Route path="/User/:id" element={<UserPage/>}/>
      </Routes>
      </>
  )
}

export default AllRoutes
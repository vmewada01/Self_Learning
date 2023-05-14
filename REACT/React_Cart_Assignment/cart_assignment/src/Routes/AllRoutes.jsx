import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import Mens from "../Pages/Mens"
import Womens from "../Pages/Womens"
import React from "react"
import LoginPage from "../Pages/LoginPage"


function AllRoutes(){
    return (
        <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/LoginPage" element={<LoginPage />}/>
   </Routes>



       </>
    )
}


export default AllRoutes
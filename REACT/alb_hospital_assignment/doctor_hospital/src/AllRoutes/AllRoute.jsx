import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Doc from '../Pages/Doc'
import Hos from '../Pages/Hos'

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doc" element={<Doc/>} />
        <Route path="/hos" element={<Hos/>} />
    </Routes>
  )
}

export default AllRoute
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products_Page from '../components/Products_Page'
import Home from '../components/Home'
import Products from '../components/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:user_id" element={<Products_Page/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes
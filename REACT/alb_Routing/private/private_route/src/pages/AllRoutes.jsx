import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Setting from './Setting'
import Dashboard from './Dashboard'
import PrivateRoute from '../components/PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/routes" element={<AllRoutes/>} />
        <Route path="/setting" element={
        <PrivateRoute>
        <Setting/>
        </PrivateRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>
        } />

     </Routes>


    </div>
  )
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoute = () => {
  return (
<Routes>
    <Route path="/Todo" element={<Todo />} />
    <Route path="/Todo/:id" element={<Todo_Id />} />
</Routes>
  )
}

export default AllRoute
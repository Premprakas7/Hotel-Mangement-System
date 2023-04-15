import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import User from '../Pages/User'
import Admin from '../Pages/Admin'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/admin' element={<Admin/>}/>

        </Routes>

      
    </div>
  )
}

export default AllRoute

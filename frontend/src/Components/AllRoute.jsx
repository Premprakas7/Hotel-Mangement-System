import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import User from '../Pages/User'
import Admin from '../Pages/Admin'
import AdminEdit from './Admin/AdminEdit'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admin/edit/:id' element={<AdminEdit/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>

      
    </div>
  )
}

export default AllRoute

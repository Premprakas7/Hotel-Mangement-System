import React from 'react'
import AdminForm from '../Components/Admin/AdminForm'
import AdminTable from '../Components/Admin/AdminTable'
import { Link as RouteLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Admin = () => {
  return (
    <div>
         <AdminTable/>
        <br />
        <AdminForm/>
        <RouteLink to="/"><Button>Home</Button></RouteLink>
    </div>
  )
}
export default Admin

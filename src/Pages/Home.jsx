import {  Button, ButtonGroup, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <Heading paddingBottom="5rem" >Hospital Mangement System</Heading>    
        <Flex justifyContent="center">
            <ButtonGroup gap="3" >
            <RouteLink to="/admin"><Button colorScheme='teal' size="lg">Admin</Button></RouteLink>
            <RouteLink to="/user"><Button colorScheme='teal' size="lg" >User</Button></RouteLink>
        </ButtonGroup>

        </Flex>
    </div>
  )
}

export default Home

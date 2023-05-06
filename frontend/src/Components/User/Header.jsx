import { Button, Flex, Spacer,Heading } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Flex bg="teal" h="4rem" alignItems="center" >
            <Heading fontStyle="italic" color="white">Maleen Hotel</Heading>
            <Spacer/>
            <RouteLink to="/signup"><Button>SignUp</Button></RouteLink>
            <RouteLink to="/signup"><Button ml=".5rem">SignUp</Button></RouteLink>
        </Flex>
    </div>
  )
}

export default Header

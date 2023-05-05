import { Box, Button, Flex, Spacer,Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Flex bg="teal">
            <Heading fontStyle="italic" color="maroon">Maleen Hotel</Heading>
            <Spacer/>
            <Button>SignUp</Button>
            <Button>Login</Button>
        </Flex>
      
    </div>
  )
}

export default Header

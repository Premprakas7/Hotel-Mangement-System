import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Flex>
            <Box>Pp Hotel</Box>
            <Box>Types of Hotels</Box>
            <Box></Box>
            <Spacer/>
            <Button>SignUp</Button>
            <Button>Login</Button>
        </Flex>
      
    </div>
  )
}

export default Header

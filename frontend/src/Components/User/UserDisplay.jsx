import { Box, Flex} from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

const UserDisplay = () => {
  return (
    <div>
      <Header/>
        <Flex>
            <Box w="25%">
                Filter
            </Box>
            <Flex w="72%">
                Data
            </Flex>
        </Flex>
    </div>
  )
}

export default UserDisplay

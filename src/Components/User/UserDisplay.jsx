import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

const UserDisplay = () => {
  return (
    <div>
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

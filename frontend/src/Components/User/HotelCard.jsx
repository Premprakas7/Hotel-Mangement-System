import React from 'react'
import {Box,Center,useColorModeValue,Heading, Text,Stack,Image} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const HotelCard = ({item,category,name,image,cost,capacity,type_room, type_bed, status,id }) => {
  return (
    <div>
         <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'30rem'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          ₹{cost}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            {type_room}
            </Text>
            <Text  fontWeight={500} fontSize={'xl'}>
              {status}
            </Text>
          </Stack>
          <RouteLink to={`/user/hotel/${id}`}><Text>See more</Text></RouteLink>
        </Stack>
      </Box>
    </Center>
      
    </div>
  )
}

export default HotelCard

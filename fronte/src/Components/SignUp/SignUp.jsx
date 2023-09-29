import React, { useState } from 'react'
import {FormControl,FormLabel,Input,Flex,Button,Heading,Stack, Text} from "@chakra-ui/react";
import { Link as RouteLink } from 'react-router-dom'
import Header from '../User/Header';


const SignUp = () => {
const [data,setData]=useState({
  name:"",
  email:"",
  password:""
})    

  const signUpHandler=()=>{

}
  return (
    <div>
      <Header/>
         <Flex
        alignItems="center"
        justifyContent="center"
        height="70vh"
        flexDirection={"column"}
       
      >
        <Heading m={"1rem"}>SIGNUP</Heading>
        <FormControl
          width="30%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"2rem"} 
        >        
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Name"
            id="name"
           
                    />

          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="email"
            id="email"
            
          
        />

        <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="password"
            id="password"
           
    />    
          <Button
            mt="15px"
            width="full"
            type="submit"
            colorScheme="teal"
            onClick={signUpHandler}
            
          >
            Sign Up
          </Button>
          <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <RouteLink to="/login" color={"blue.400"}>
                   <Button colorScheme="teal">Login</Button> 
                  </RouteLink>
                </Text>
              </Stack>
        </FormControl>
       
      </Flex>
      
    </div>
  )
}

export default SignUp


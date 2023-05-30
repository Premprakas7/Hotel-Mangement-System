import React, { useState } from 'react'
import {FormControl,FormLabel,Input,Flex,Button,Heading,Stack, Text} from "@chakra-ui/react";
import axios from 'axios';
import { Link as RouteLink } from 'react-router-dom'
import Header from '../User/Header';



const SignUp = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange = (e) => {
        const newData = { ...values };
        newData[e.target.id] = e.target.value;
        setValues(newData)
      };

      const AddProducts=(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in//api/register",{
            name:values.name,
            email:values.email,
            password:values.password,
        }).then((res)=>{console.log(res.data)}).catch((err)=>console.log(err.values))
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
            value={values.name}
           onChange={(e) => handleChange(e)}
          />

          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="email"
            id="email"
            value={values.email}
           onChange={(e) => handleChange(e)}
          />

        <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="password"
            id="password"
            value={values.password}
           onChange={(e) => handleChange(e)}
          />    
          <Button
            mt="15px"
            width="full"
            type="submit"
            colorScheme="teal"
             onClick={(e)=>AddProducts(e)}
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


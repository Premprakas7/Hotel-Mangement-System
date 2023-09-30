import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import Header from "../User/Header";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange=(e)=>{
    const newData = {...data}
    newData[e.target.id]=e.target.value;
    setData(newData)
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    axios.post("https://jwtback.onrender.com/register",{
    name:setData.name,
    email:setData.email,
    password:setData.password
  }).then((res)=>console.log(res.d))
  };

  
  return (
    <div>
      <Header />
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
          <Input type="text" placeholder="Enter Name" 
          id="name" value={data.name}
          onChange={(e)=>handleChange(e)}
          />

          <FormLabel>Email</FormLabel>
          <Input type="text" placeholder="email"
           id="email"  value={data.email}
           onChange={(e)=>handleChange(e)}
           />

          <FormLabel>Password</FormLabel>
          <Input type="text" placeholder="password" 
          id="password" value={data.password}
          onChange={(e)=>handleChange(e)}
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
              Already a auth?{" "}
              <RouteLink to="/login" color={"blue.400"}>
                <Button colorScheme="teal">Login</Button>
              </RouteLink>
            </Text>
          </Stack>
        </FormControl>
      </Flex>
    </div>
  );
};

export default SignUp;

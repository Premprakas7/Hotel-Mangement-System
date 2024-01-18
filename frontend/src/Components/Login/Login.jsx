import React, { useState } from "react";
import { FormControl,FormLabel,Input,Flex,Button,Heading,Stack,Text,} from "@chakra-ui/react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import Header from "../User/Header";
import { login } from "../../Redux/auth/action";
import { LOGIN_SUCCESS } from "../../Redux/auth/actionTypes";

const Login = () => {
  const [name,setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((res)=>{
        console.log(res.type)
        if(res.type === LOGIN_SUCCESS){
          navigate("/", {replace:true})}
        }
      )
    }
  }
  
  return (
    <div>
      <Header />
      <Flex
        alignItems="center"
        justifyContent="center"
        height="70vh"
        flexDirection={"column"}
      >
        <Heading m={"1rem"}>LOGIN</Heading>
        <FormControl
          width="30%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"2rem"}
          onSubmit={handleSubmit}
        >
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Name"
            id="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />

          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />

          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            mt="15px"
            width="full"
            colorScheme="teal"
            onSubmit={handleSubmit}
          >
            Login
          </Button>
          <Stack pt={6}>
            <Text align={"center"}>
              Not a User ?{" "}
              <RouteLink to="/signup" color={"blue.400"}>
                <Button colorScheme="teal">SIGNUP</Button>
              </RouteLink>
            </Text>
          </Stack>
        </FormControl>
      </Flex>
    </div>
  );
};

export default Login;

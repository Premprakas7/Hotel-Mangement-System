import React, { useReducer } from 'react'
import {FormControl,FormLabel,Input,Flex,Button,Heading,Stack, Text} from "@chakra-ui/react";
import { Link as RouteLink , useNavigate } from 'react-router-dom'
import Header from '../User/Header';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/action';
import { REGISTER_SUCCESS } from '../../Redux/auth/actionTypes';

function reducer(state,action){
  switch(action.type){
    case "name":
      return{
        ...state,
        name:action.payload
      }
      case "email":
        return{
          ...state,
          email:action.payload
        }
        case "password":
          return{
            ...state,
            password:action.payload
          }
      default: return state;
  }
}

const initialState={
  name:'',
  email:'',
  password:'',
}



const SignUp = () => {
    const [state, setter]=useReducer(reducer, initialState);
    const navigate=useNavigate();
    const dispatch= useDispatch();

    const signUpHandler=()=>{
dispatch(register(state)).then((res)=>{
  if(res===REGISTER_SUCCESS){
    navigate("/login",{replace:true})
  }
})
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
            value={state.name} onChange={(e)=>setter({type:'name', payload:e.target.value})}
                    />

          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="email"
            id="email"
            value={state.email} onChange={(e)=>setter({type:'email', payload:e.target.value})}
          
        />

        <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="password"
            id="password"
            value={state.password} onChange={(e)=>setter({type:'password', payload:e.target.value})}
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


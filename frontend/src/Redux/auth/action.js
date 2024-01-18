import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("http://localhost:5001/login", payload)
    .then((res)=>{ return dispatch({type:LOGIN_SUCCESS, payload:res.data.token})})
    .catch((err)=>{return dispatch({type:LOGIN_FAILURE })})
    }
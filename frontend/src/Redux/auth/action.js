import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("https://hotel-backend-3tcb.onrender.com/login")
    .then((res)=>{ return dispatch({type:LOGIN_SUCCESS, payload:res.data.token})})
    .catch((err)=>{return dispatch({type:LOGIN_FAILURE })})
    }
import {  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initialState = {
    token: '',
    isLoading: false,
    isError: false,
    isAuth:false
  };

 export const reducer = (state = initialState ,{type,payload}) => {
    switch(type){
      case LOGIN_REQUEST:return{...state,isLoading:true,isAuth:false,isError:false}
      case LOGIN_SUCCESS :return{...state,isLoading:false,isError:false,isAuth:true,token:payload}
      case LOGIN_FAILURE :return{...state,isLoading:false,isAuth:false,isError:true,token:""}
      default:{return state;} 
  }
  };
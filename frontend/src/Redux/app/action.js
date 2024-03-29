import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS, DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE,
   EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE ,SORT_DATA, ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAILURE} from "./actionTypes"



export const getData=(params)=>(dispatch)=>{
dispatch({type:DATA_REQUEST})
axios.get("https://hotel-backend-3tcb.onrender.com/users", params)
.then((res)=>dispatch({type:DATA_SUCCESS, payload:res.data}))
.catch((err)=>dispatch({type:DATA_FAILURE}))
}


export const deleteItem = (id, payload) => (dispatch) => {
    dispatch({ type: DELETE_REQUEST});
    return axios.delete(`https://hotel-backend-3tcb.onrender.com/users/${id}`, payload)
      .then((r) => dispatch({ type: DELETE_SUCCESS, payload: r }))
      .catch((e) => dispatch((e) => dispatch({ type: DELETE_FAILURE, payload: e })
        )
      );
  };

  export const EditData = (id, payload) => (dispatch) => {
    dispatch({ type: EDIT_REQUEST });
    return axios.patch(`https://hotel-backend-3tcb.onrender.com/users/${id}`, payload)
      .then((r) => { dispatch({ type:EDIT_SUCCESS, payload: r});})
      .catch((e) => dispatch({ type: EDIT_FAILURE, payload: e }));
  };

  export const Book=(params)=>(dispatch)=>{
    dispatch({type:ADD_CART_REQUEST})
    axios.post("https://hotel-backend-3tcb.onrender.com/carts", params)
    .then((res)=>dispatch({type:ADD_CART_SUCCESS, payload:res.data}))
    .catch((err)=>dispatch({type:ADD_CART_FAILURE}))
    }

  export const sortData = (hotel) => {
    return {
      type: SORT_DATA,
      payload: hotel,
    };
  };
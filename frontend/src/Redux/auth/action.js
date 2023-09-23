import axios from "axios";
import * as Types from "./actionTypes";


export const login = (params) => (dispatch) => {
  dispatch({ type: Types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in//api/login", params)
    .then((r) => {
      dispatch({ type: Types.LOGIN_SUCCESS, payload: r.data.token });
      return Types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: Types.LOGIN_FAILURE, payload: e });
      return Types.LOGIN_FAILURE;
    });
};
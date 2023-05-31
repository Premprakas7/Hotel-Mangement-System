import axios from "axios";
import * as Types from "./actionTypes";

export const register = (payload) => (dispatch) => {
  dispatch({ type: Types.REGISTER_REQUEST });
  return axios
    .post("https://reqres.in//api/register", payload)
    .then((r) => {
      dispatch({ type: Types.REGISTER_SUCCESS, payload: r.data });
      return Types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: Types.REGISTER_FAILURE, payload: e });
      return Types.REGISTER_FAILURE;
    });
};

export const login = (params) => (dispatch) => {
  dispatch({ type: Types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in//api/login", params)
    .then((r) => {
      dispatch({ type: Types.LOGIN_SUCCESS, payload: r.data.token });
      return Types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: Types.LOGUN_FAILURE, payload: e });
      return Types.LOGUN_FAILURE;
    });
};
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./app/reducer";
import thunk from "redux-thunk";
import {reducer as Auth} from "./auth/reducer"


export const rootReducer=combineReducers({reducer,Auth})
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))
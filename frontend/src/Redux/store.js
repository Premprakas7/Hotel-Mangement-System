import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as app} from "./app/reducer";
import {thunk} from "redux-thunk";
import {reducer as Auth} from "./auth/reducer"


export const rootReducer=combineReducers({app,Auth})
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))
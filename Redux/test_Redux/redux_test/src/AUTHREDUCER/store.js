import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as AppReducer} from "../APPREDUCER/reducer"
import {reducer as AuthReducer} from "../AUTHREDUCER/reducer"
import formReducer from "../Genrate/formSlice";
import { configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({AppReducer, AuthReducer})

///const store = legacy_createStore(rootReducer)

const store= configureStore({reducer:{form: formReducer,},});

export {store}
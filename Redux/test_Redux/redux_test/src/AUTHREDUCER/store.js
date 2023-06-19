import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as AppReducer} from "../APPREDUCER/reducer"
import {reducer as AuthReducer} from "../AUTHREDUCER/reducer"


const rootReducer = combineReducers({AppReducer, AuthReducer})

const store = legacy_createStore(rootReducer)

export {store}
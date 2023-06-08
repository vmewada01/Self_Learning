import {legacy_createStore, combineReducers} from "redux"

import { reducer as AppReducer} from "./reducer"
import {reducer as AuthReducer} from "../AuthREducer/reducer"

const rootReducer = combineReducers({AppReducer,AuthReducer})

const store= legacy_createStore(rootReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {store}
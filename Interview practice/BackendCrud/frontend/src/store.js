import { applyMiddleware,combineReducers,compose, legacy_createStore } from "redux";
import {reducer} from "./Redux/reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ reducer });

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}
import { ADD_LOGIN_FAILURE,ADD_LOGIN_REQUEST,ADD_LOGIN_SUCCESS } from "./actionType";
import * as types from "../AuthREducer/actionType"
import { loadData, saveData } from "../Utils/actionStore";

const intialstate={
    isAuth: false,
    token: loadData("token")|| "",
    isLoading: false
}

const reducer=(oldstate=intialstate, action)=> {
    const {type, payload} = action ;
    switch(type){
        case  types.ADD_LOGIN_REQUEST:
            return{
                ...oldstate,
                 isLoading: true,
            }
            case  types.ADD_LOGIN_SUCCESS:
                saveData("token", payload)
                return{
                    ...oldstate,
                     isLoading: false,
                     isAuth: true,
                     token: payload
                }
                case  types.ADD_LOGIN_FAILURE:
                    return{
                        ...oldstate,
                         isLoading: true,
                         isAuth: false,
                         token: ""
                    }
                    default:
                        return oldstate
    }
   
}

export {reducer}


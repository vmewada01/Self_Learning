import * as types from "./actionType";
import axios from "axios"

const initialState = {
  data: [],
  isError: false,
  isLoading: false,

};


  const reducer =(state=initialState, action)=> {
    const {type,payload}= action;
    
    switch(type){
        case types.GET_TODO_DATA_REQUEST: {
            
         return {
            ...state,
            isLoading:true,
            isError: false,
         };
        }
        case types.GET_TODO_DATA_SUCCESS: {
            alert("request reached")
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        }
        case types.GET_TODO_DATA_FAILURE: {
            return {
              ...state,
              isLoading: true,
              isError: true,
              data: "",
            };
          }
          case types.ADD_TODO_DATA_REQUEST: {
            return {
               ...state,
               isLoading:true,
               isError: false,
            };
           }
           case types.ADD_TODO_DATA_SUCCESS: {
               return {
                   ...state,
                   isLoading: false,
                   isError: false,
                  
               }
           }
           case types.ADD_TODO_DATA_FAILURE: {
               return {
                 ...state,
                 isLoading: true,
                 isError: true,
              
               };
             }
             case types.DELETE_TODO_DATA_REQUEST: {
                return {
                   ...state,
                   isLoading:true,
                   isError: false,
                };
               }
               case types.DELETE_TODO_DATA_SUCCESS: {
                   return {
                       ...state,
                       isLoading: false,
                       isError: false,
                       
                   }
               }
               case types.DELETE_TODO_DATA_FAILURE: {
                   return {
                     ...state,
                     isLoading: true,
                     isError: true,
                  
                   };
                 }
                 case types.EDIT_TODO_DATA_REQUEST: {
                    return {
                       ...state,
                       isLoading:true,
                       isError: false,
                    };
                   }
                   case types.EDIT_TODO_DATA_SUCCESS: {
                       return {
                           ...state,
                           isLoading: false,
                           isError: false,
                       
                       }
                   }
                   case types.EDIT_TODO_DATA_FAILURE: {
                       return {
                         ...state,
                         isLoading: true,
                         isError: true,
                        
                       };
                     }
       default:
           return state;
    }
    
}

export {reducer};
import * as types from "../AuthREducer/actionType"

const loginRequest = () => {
    return { type: types.ADD_LOGIN_REQUEST };
  };
  
  const loginSccess = (token) => {
    return { type: types.ADD_LOGIN_SUCCESS,
        token 
     };
  };
  
  const loginFailure = (payload) => {
    return { type: types.ADD_LOGIN_FAILURE };
  };
  

  export {loginFailure, loginRequest,loginSccess}
 
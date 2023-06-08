import * as types from "../AuthREducer/actionType"

const loginRequest = () => {
    return { type: types.ADD_LOGIN_REQUEST };
  };
  
  const loginSccess = (payload) => {
    return { type: types.ADD_LOGIN_SUCCESS,
        payload
     };
  };
  
  const loginFailure = (payload) => {
    return { type: types.ADD_LOGIN_FAILURE };
  };
  

  export {loginFailure, loginRequest,loginSccess}
 
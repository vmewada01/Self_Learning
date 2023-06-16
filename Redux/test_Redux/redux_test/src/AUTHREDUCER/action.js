import { LOGIN_DATA_FAILURE, LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS } from "./actionType"

const getLoginRequest =()=> {
  return { type: LOGIN_DATA_REQUEST}
}

const getLoginSuccess =(payload)=> {
    return { type: LOGIN_DATA_SUCCESS, payload}
  }

  const getLoginFailure = ()=> {
    return {type: LOGIN_DATA_FAILURE}
  }


  export {getLoginRequest, getLoginSuccess,getLoginFailure}
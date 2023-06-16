import * as types  from "../APPREDUCER/actionType"

const getDataRequest =()=> {
  return { type: types.GET_DATA_REQUEST}
}

const getDataSuccess =(payload)=> {
    return { type: types.GET_DATA_SUCCESS, payload}
  }

  const getDataFailure = ()=> {
    return {type: types.GET_DATA_FAILURE}
  }


  export {getDataFailure, getDataRequest,getDataSuccess}
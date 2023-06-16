 import axios from "axios"
import * as types from "../Redux/actionType"

 const getTaskRequest=()=>{
    return {type: types.GET_TASK_REQUEST}
 }

 const getTaskSuccess=(payload)=>{
    return {type: types.GET_TASK_SUCCESS,
        payload
}
 }


 const getTaskFailure=()=>{
    return {type: types.GET_TASK_FAILURE}
 }

 const AddTaskRequest=()=>{
   return {type: types.ADD_TASK_REQUEST}
}

const AddTaskSuccess=()=>{
   return {type: types.ADD_TASK_SUCCESS

}
}


const AddTaskFailure=()=>{
   return {type: types.ADD_TASK_FAILURE}
}

const getTask=(dispatch)=>{
   dispatch(getTaskRequest());
   axios
     .get("http://localhost:8080/todos")
     .then((res) => {
      // console.log(res.data)
       dispatch(getTaskSuccess(res.data));
     })
     .catch((err) => {
       dispatch(getTaskFailure());
     });
 }



 export {getTask ,getTaskFailure, getTaskSuccess,getTaskRequest, AddTaskFailure,AddTaskRequest,AddTaskSuccess}
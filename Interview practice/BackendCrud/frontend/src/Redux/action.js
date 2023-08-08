
import * as types from "./actionType"
import axios from "axios"

export  const ReadData =()=>(dispatch)=> {
   dispatch({type: types.GET_TODO_DATA_REQUEST});
   alert("reqmade")
   return  axios.get("http://localhost:8000/todo").then((res)=> {
// console.log(res.data.user)
  const payload = JSON.parse(res.data.user )
 // console.log(payload)
   dispatch({type: types.GET_TODO_DATA_SUCCESS, payload});
   })
   .catch((err)=> {
    dispatch({type: types.GET_TODO_DATA_FAILURE});
   })
   
}

export const  createData=(payload)=>(dispatch)=> {
    dispatch({type: types.ADD_TODO_DATA_REQUEST});
    return  axios.post("http://localhost:8000/todo/create",payload).then((res)=> {
           dispatch({type: types.ADD_TODO_DATA_SUCCESS});
    })
    .catch((err)=> {
        dispatch({type: types.ADD_TODO_DATA_FAILURE});
    })
}

export const DeleteData=(id)=>(dispatch)=> {
    dispatch({type: types.DELETE_TODO_DATA_REQUEST});
    return    axios.delete(`http://localhost:8000/todo/${id}`).then((res)=> {
            dispatch({type: types.DELETE_TODO_DATA_SUCCESS});
    })
    .catch((err)=> {
        dispatch({type: types.DELETE_TODO_DATA_FAILURE});
    })
}

export const UpdateData=(id,payload)=>(dispatch)=>{
    dispatch({type: types.EDIT_TODO_DATA_REQUEST});
 return    axios.patch(`http://localhost:8000/todo/${id}`,payload).then((res)=> {
        dispatch({type: types.EDIT_TODO_DATA_SUCCESS});
    })
    .catch((err)=> {
        dispatch({type: types.EDIT_TODO_DATA_FAILURE});
    })
}


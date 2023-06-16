import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTaskFailure,
  AddTaskRequest,
  AddTaskSuccess,
  getTaskFailure,
  getTaskRequest,
  getTaskSuccess,
  getTask
} from "../Redux/action";


const TodoInput = () => {
 
  const [currentTask, setCurrentTask] = useState("")

  const dispatch = useDispatch();
  const taskData = useSelector((store) => store.tasks);
 //console.log(taskData)


const handleAdd =()=> {
if(currentTask){
  const payload={
    tasks: currentTask,
    status: false
  }
  dispatch(AddTaskRequest())
  axios.post("http://localhost:8080/todos",payload)
  .then((res)=> {
   // console.log(res.data)
    dispatch(AddTaskSuccess(res.data))
  })
 .then(()=> getTask(dispatch))
  .catch((err)=> {
    dispatch(AddTaskFailure())
  })
}

}

  return (
    <div>
      <h1>TodoInput</h1>
      <div>
        <input value={currentTask} onChange={(e)=> setCurrentTask(e.target.value)} type="text" />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
     
    </div>
  );
};

export default TodoInput;

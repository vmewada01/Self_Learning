import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import {
  AddTaskFailure,
  AddTaskRequest,
  AddTaskSuccess,
  getTaskFailure,
  getTaskRequest,
  getTaskSuccess,
  getTask
} from "../Redux/action";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Todo = () => {

  const dispatch = useDispatch();
  const taskData = useSelector((store) => store.tasks);
 //console.log(taskData)

 

  useEffect(() => {
    dispatch(getTask)
  // getTask(dispatch)
  }, []);

  return (
    <div>
        <h1>Todo</h1>
        <TodoInput  />
        {taskData?.length>0 && taskData?.map((abc) => {
        return <div key={abc.id}> {abc.tasks} </div>;
      })}
    </div>
  )
}

export default Todo
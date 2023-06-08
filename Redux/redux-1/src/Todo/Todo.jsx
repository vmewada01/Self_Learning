import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addTodoFailure, addTodoRequest, addTodoSuccess, todosFailure, todosRequest, todosSuccess } from "../Redux/action";
import { Link } from "react-router-dom";
import { store } from "../Redux/store";

const Todo = () => {


  const dispatch = useDispatch();
  const { todos, isloading, isError,token } = useSelector((store) => {
   
    return {
      todos: store.AppReducer.todos,
      isloading: store.AppReducer.isloading,
      isError: store.AppReducer.isError,
      token: store.AuthReducer.token
    };
  }, shallowEqual);
 // console.log(todos);
 console.log(token)

  const getTodos = () => {
    dispatch(todosRequest());
    axios({
      url: "http://localhost:8080/todos",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch(todosSuccess(res.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(todosFailure());
      });
  };

  const addTodo = (payload) => {
    dispatch(addTodoRequest())
    axios({
      url: "http://localhost:8080/todos",
      method: "POST",
      data: payload,
    })
      .then((res) => {
        console.log(res.data);
      // console.log(store.AppReducer.token)
        dispatch(addTodoSuccess())
      })
      .then(()=> dispatch(getTodos()))
      .catch((err) => {
       // console.log(err);
        dispatch(addTodoFailure())
      });
  };

  useEffect(() => {
    getTodos();
 
  }, []);

 const handleDeletfunc =(id)=>{
     axios.delete(`http://localhost:8080/todos/${id}`)
   .then((res)=>{
    console.log(res.data)
   })
   .then(()=> getTodos())
   .catch((err)=> {
    console.log(err)
   })
 }
 
 const toggleFunction=(id,title,toggle)=> {
  axios.put(`http://localhost:8080/todos/${id}`,{
    id: id,
    title: title,
    status: !toggle
  })
  .then((res)=>{
  // console.log(res.data)
  })
  .then(()=> getTodos())
  .catch((err)=> {
   console.log(err)
  })
 }
 

  return (
    <div>
      Todo
      <TodoInput addTodo={addTodo} />
      { todos.length>0 && todos.map((abc) => {
        return <div key={abc.id} style={{display:"flex" ,gap:"1rem",justifyContent:"center"}}>
               <div>{abc.title}</div>
               <div> <button onClick={()=>toggleFunction(abc.id, abc.title,abc.status)}>{abc.status ? "true": "false"}</button></div>
               <div><button onClick={()=> handleDeletfunc(abc.id)}>delete</button></div>
               <div><Link to={`/Todo/${abc.id}`}>Get More Details</Link></div>
             
             </div>;
      })}
    </div>
  );
};

export default Todo;

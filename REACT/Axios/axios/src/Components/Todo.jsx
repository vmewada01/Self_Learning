import React, { useEffect, useState } from "react";
import { DeleteTodos, POST_TODO, UPDATE_TODO, getTodos } from "../Api_fetch";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleTodos();
  }, []);

  function handleTodos() {
    setError(true);
    setLoading(true);
    getTodos()
      .then((res) => {
      
        setData(res.data);
        setLoading(false);
        setError(false);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
    function deleteTodo(id){
        DeleteTodos(id).then(()=> handleTodos())
        console.log(id)
    }
   
   function handleAdd(title){
    POST_TODO({
        title,
        status: false
    }).then(()=> handleTodos())
       console.log(title)
   }

   function handleUpdate(id,newStatus){
    UPDATE_TODO({id,newStatus}).then(()=> handleTodos())
       console.log(newStatus)
   }


  return (
    <div>
      {loading && <div>......loading</div>}
      {error && <div>......error</div>}
      <h1>CRUD</h1>
      {/* <AddTodo handleAdd={handleAdd} /> */}
      <br />
      <br />
      <div>
        {data.map((abc) => {
      return     <TodoItem
            title={abc.title}
            key={abc.id}
            id={abc.id}
            status={abc.status}
            deleteTodo={deleteTodo}
            handleToggle={handleUpdate}
          />;

        })}
      </div>
    </div>
  );
};

export default Todo;

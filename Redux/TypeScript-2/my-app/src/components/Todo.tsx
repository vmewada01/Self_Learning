import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import axios, { AxiosResponse } from "axios";

export interface TodoItems {
  id: number;
  title: string;
  status: boolean;
  updateTodos?: () => void | undefined;
  deleteTodos?: ()=> void ;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  const addHandler = (title: string) => {
    if (title) {
      const payload = {
        // id: todos.length + 1,
        title: title,
        status: false,
      };
      // setTodos([...todos, payload]);
      axios.post("http://localhost:8080/todos", payload).then(getTodos);
    }
  };
  //console.log(todos)

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((response: AxiosResponse<TodoItems[]>) => {
        setTodos(response.data);
      }).catch((err)=> {
        console.log(err)
      })
  };

  const updateTodos = (id: number, title: string, status: boolean) => {
    if (id) {
      axios({
        url: `http://localhost:8080/todos/${id}`,
        method: "PUT",
        data: {
          id: id,
          status: !status,
          title: title,
        },
      })
        .then(getTodos)
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const deleteTodos = (id: number) => {
    if (id) {
      axios({
        url: `http://localhost:8080/todos/${id}`,
        method: "DELETE",
      })
        .then(getTodos)
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header label="Todo Application" />
      <TodoInput addHandler={addHandler} />
      {todos.length > 0 &&
        todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              updateTodos={() => updateTodos(item.id, item.title, item.status)}
              deleteTodos={()=> deleteTodos(item.id)}
            />
          );
        })}
    </div>
  );
};

export default Todo;

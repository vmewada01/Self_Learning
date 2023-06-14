import React, { useCallback, useState } from "react";
import TodoInput from "./TodoInput";
import Verify from "./Verify";

const Todo = () => {
  const initalState = [
    { id: 1, status: false, title: "Task 1" },
    { id: 2, status: false, title: "Task 2" },
    { id: 3, status: false, title: "Task 3" },
  ];
  const [todos, setTodos] = useState(initalState);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    if (input) {
      const payload = {
        id: todos.length + 1,
        status: false,
        title: input,
      };
      console.log(todos);
      setTodos([...todos, payload]);
      setInput("");
    }
  };

//   const handleToggle = useCallback((id) => {
//     const newTodo = todos.map((item) => {
//       if (item.id === id) {
//         return { ...item, status: !item.status };
//       } else {
//         return item;
//       }
//     });
//     setTodos(newTodo);
//   },[todos]);


  const handleToggle = useCallback((id) => {
     setTodos((prev)=> prev.map((item) => {
              if (item.id === id) {
                return { ...item, status: !item.status };
              } else {
                return item;
              }
            })
     )
  },[]);






  const handleDelete = useCallback((id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  },[todos]);

  return (
    <div>
      <h1>Todos Input</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.length &&
        todos.map((abc) => {
          return <TodoInput key={abc.id} {...abc} handleDelete={handleDelete} handleToggle={handleToggle} />;
        })}
        <Verify />
    </div>
  );
};

export default Todo;

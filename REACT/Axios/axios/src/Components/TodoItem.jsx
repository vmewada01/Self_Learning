import React, { useState } from "react";

function TodoItem({title, status, id, deleteTodo, handleToggle}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={()=> handleToggle(id,!status)}>{status ? "DONE": "NOT DONE"}</button>
      <button onClick={()=> deleteTodo(id)}>delete</button>
    </div>
  );
}

export default TodoItem
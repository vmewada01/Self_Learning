import React, { useState } from "react";

function Todo() {
  const [value, setValue] = useState("");
  // console.log(value)
  const [input, setInput] = useState([]);

  const submitFunc = () => {
    setInput([...input, value]);
    setValue("");
    // console.log(input);
  };

  // const Sortout=()=>{
  //   input.filter((kbc)=>{
  //    return  kbc !==abc.id
  //   })
  // }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="enter input here.."
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          //console.log(e.target.value)
          //console.log(e.target.value)
        }}
        value={value}
      />
      <button onClick={submitFunc}>Submit</button>

      <br />

      {input?.map((abc) => {
        return (
          <div>
            <li>{abc}</li>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;

import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [data, setdata] = useState([]);

  const input = (e) => {
    setValue(e.target.value);
  };

  const submit = () => {
    // data.push(value)
    // data.push({id:Date.now()});
    // setdata(data);
    setdata([...data, { id: Date.now(), value: value }]);
    console.log(data);
    setValue("");
  };

  const remove = (hatao) => {
    console.log(hatao);

    setdata(
      data.filter((mujheHatao) => {
        return mujheHatao.value !== hatao;
      })
    );
  };

  return (
    <div>
      Todo
      <input
        type="text"
        placeholder="type here"
        value={value}
        onChange={input}
      />
      <button onClick={submit}>Add</button>
      {data.map(function (abc) {
        return (
          <div key={abc.id}>
            <li key={abc.id}
            className="flex"
            
            >{abc.value}
            
            
            <button key={abc.id} onClick={() => remove(abc.value)}>Delete</button>
            </li>
          
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";


const Todo = () => {
  const [data, setData] = useState([]);

  const[page, setPage] = useState(1)

  const [loading, setLoading] = useState(false)

 
    const api = async (p) => {
      try {
        setLoading(true)
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/todos?&_page=${p}&_limit=10`
        );

        const ans = await data.json();

        // console.log(ans)
        setData(ans);
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
        setLoading(false)
       api(page);
      }, [page]);
//console.log(loading)
 // console.log(data);
  return (
    <div>
    <h1>Todo Application</h1>
    <button disabled={page==1} onClick={()=> setPage(page=> page-1)}>PREV</button>
    <span style={{padding:"0.5rem"}}>{page}</span>
    <button onClick={()=> setPage(page=> page+1)} >NEXT</button>
       <br />
       <br />
       <br />
       <div>{loading && <h3>Loading....</h3>}</div>
       
      <TodoList data={data} />
    </div>
  );
};

export default Todo;

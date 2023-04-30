import React,{useState} from 'react'
import styles from "./todo.module.css"

const Todo_item = () =>  {
const [value, setValue]= useState("");
const [todos, setTodos]= useState([]);
return(
  <div>
    

   
   <div>
   {todos.map((x)=>(
   <div className={styles.todo}>
   
   <div key={x.id}>{x.value}</div>
   <input type='checkbox'/>
   </div>
    
   ))}
   </div>
   <div className={styles.input}>

    <input value={value} placeholder='Write Something' onChange={(e)=>{setValue(e.target.value);
   
}}
  
   />
   <button onClick={()=>{
    setTodos([...todos, {id: Date.now(), value: value}]);
    setValue("");
   }}>+</button>
    </div>
   

  </div>  
);

};

export default Todo_item;
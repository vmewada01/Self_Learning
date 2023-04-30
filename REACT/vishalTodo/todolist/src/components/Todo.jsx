import React, { useState } from 'react'
import List from './List';


const Todo = () => {
  const [list, setList] = useState("");
  const [Items, setItems] = useState([])


    const change =(e) =>{
      setList(e.target.value)
    };

    const Itemslist = () =>{
        setItems((ArrayItem) =>{
            return [...ArrayItem, list]
        });
        setList("");
    }
    const deleteItems = (id) =>{
        setItems((ArrayItem) => {
            return ArrayItem.filter((element,index) => {
                return index !==id;
            })
        })
    }

  return (
    <div className='main'>
     <div className='container'>
     <h1>TODO LIST</h1>
     <br />
     <input 
     type='text'
     placeholder='Write Something'
     onChange={change}
     value={list}
     className='input'
     />
     <button className='btn'
     onClick={Itemslist}
     >
        +
     </button>

    {Items.map((ValueOfItems, index) =>{
        return <List key={index} id={index} text={ValueOfItems} onSelect={deleteItems} />;
    } )}


     </div>
    </div>
  )
}

export default Todo;
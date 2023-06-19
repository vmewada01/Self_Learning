import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
 const [text ,setText] = useState("")
 const [item, setItems]= useState([])

 const handleSubmit =(e)=> {
       e.preventDefault()
       const payload={
      
        value: text
       }
       axios.post("http://localhost:8080/posts",payload)
       .then((res)=> {
        console.log(res.data)
        setItems(res.data)
        setText("")
       })
       .catch((err)=> {
        console.log(err)
       })

 }

 useEffect(()=> {
  axios.get("http://localhost:8080/posts")
  .then((res)=> {
    console.log(res.data)
    setItems(res.data)
    setText("")
  })
  .catch((er)=> {
    console.log(er)
  })
 },[])



  return (
    <div>
      <h1>Form</h1>
      <form  onSubmit={handleSubmit}>
        <div>
          <input onChange={(e)=> setText(e.target.value) } type="text" value={text} placeholder="type something here" />
          <input className="handlesubmit" type="submit" />
        </div>
      </form>
     {/* { item && item.map((abc)=> {
        return <div key={abc.id}>{abc.value}</div>
     })} */}
     <h3>{item.value}</h3>
    </div>
  );
};

export default Form;

import axios from 'axios'
import React, { useRef, useState } from 'react'

const Feed = () => {

    const [formdata, setFormdata]= useState({})
       
    const inputFile = useRef()

   const handleChange=(e)=> {
      const {name, value}= e.target
      setFormdata({
        ...formdata,
        [name]: value,
      })
   }


    const handleSubmit=(event)=> {
       
       event.preventDefault();
      const formData= new FormData()
      formData.append("title",FormData.title)
      formData.append("description", FormData.description)
      formData.append("tags", FormData.tags)
      formData.append("image",inputFile.current.files[0]);
 
   axios.post("http://localhost:8007/profile/feed", formData,{
        headers:{
            "Content-Type":"multipart/form-data"
          },
      }).then((res)=> console.log(res.data))
     
    }
  return (
    <div>
     <h1>Feed</h1>
     <form onSubmit={handleSubmit}>
     <div><input type="text" name="title" placeholder='title' onChange={handleChange} /></div>
     <div><input type="text" name="description"  placeholder='description' onChange={handleChange} /></div>
    <div><input type="text" name="tags" placeholder='tags' onChange={handleChange} /></div>
    <div><input type="file" ref={inputFile}  /></div>
    <div><input type="submit" value='Create Post' /></div>
    </form>
    </div>
  )
}

export default Feed
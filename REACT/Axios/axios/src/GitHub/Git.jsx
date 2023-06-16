import React, { useEffect, useState } from 'react'
import axios from "axios"
import GitData from './GitData'

const Git = () => {

 const [text, setText] = useState("")
 const [data, setData] = useState([])
 const [error, setError] = useState(false)
 const [loading, setLoading] = useState(false)
 const [page, setPage] = useState(1)


//console.log(data)

useEffect(()=>{
    SearchFun(text)
 
},[])
function SearchFun({text}){
  if(!text){
    return new Promise.reject("query must be provided")
  }
    setLoading(true)
    axios.get(`https://api.github.com/search/users?q=${text}&_page=${page}&_limit=5`).then((res)=>{
        console.log(res.data)
        setLoading(false)
        setData(...data, res.data.items)
      })
      .catch((err)=>{
        console.log(err)
        setError(true)

      })
}

  return (
    <div>
        <h1>GitHub Fetch</h1>
        {loading && <div>.....loading</div>}
        {error && <div>SomeThing Went Wrong</div>}
        <div><input onChange={(e)=>setText(e.target.value)} type="text" name="text" placeholder='enter name...' value={text} /></div>
        <div><button onClick={SearchFun}>Search</button></div>
        <GitData data={data} page={page} setPage={setPage}/>
      {/* {data?.map((abc)=>{
        return (
            <div>
                <h1>{abc.login}</h1>
            </div>
        )
      })} */}
    </div>
  )
}

export default Git
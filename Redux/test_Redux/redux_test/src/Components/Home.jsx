import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFailure, getDataRequest, getDataSuccess } from '../APPREDUCER/action'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
 
    const fetchItems = ()=> {
        dispatch(getDataRequest())
        axios.get("http://localhost:8080/watches")
        .then((res)=> {
            setData(res.data)
            console.log(res.data)
          // console.log(getDataSuccess(res.data))
        (dispatch(getDataSuccess(res.data))) 
        })
        .catch((err)=> {
            dispatch((getDataFailure()))
        })
    }

     useEffect(()=> {
      fetchItems()
     },[])

    const matchData= useSelector((store)=> store.AppReducer.data)
    console.log(matchData)

    const [searchParams, setSearchParams] = useSearchParams()
    const intialSearchparams = searchParams.getAll("category")
    const [category, setCategory]= useState(intialSearchparams || [])
   const handleChange=(e)=> {
      const option = e.target.value
      
      console.log(option)
   }

  const handleSubmit=(e)=> {
   e.preventDefault()
 

  }

  return (
    <div style={{display:"flex"}}>
        <div style={{width:"30%" , height:"100vh" , border:'1px solid black'}}>
            <h1>Filter</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <div><label htmlFor="">Analog</label><input onChange={handleChange} type="checkbox" value="Analog" name="Analog"  /></div>
                <div><label htmlFor="">Chronograph</label><input onChange={handleChange} type="checkbox" value="Chronograph" name="Chronograph" /></div>
                <div><label htmlFor="">Digital</label><input onChange={handleChange} type="checkbox" value="Digital" name="Digital" /></div>
                </form>
            </div>
        </div>
        <div style={{width:"70%"  ,height:"100%" , border:'1px solid black'}}>
            <h1 style={{textAlign:"center"}}>Items</h1>
            <div style={{display:"grid", gridTemplateRows:"repeat(3,1fr)", gridTemplateColumns:"repeat(3,1fr)" ,gap:'1rem' ,textAlign:'center'}}>
            {data.map((item)=> {
                return (
                    <div key={item.id}>
                 <div ><img style={{width:'200px', height:"200px"}} src={item.image} alt="" /></div>
                <div>{item.category}</div>
                </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Home
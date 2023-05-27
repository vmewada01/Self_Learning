import React, { useEffect, useState } from 'react'

const Search = () => {
 
    const [text, setText] = useState("")
    const [dummy, setDummy] = useState([])
    const [data, setData]= useState([])
console.log(dummy)
 const handleFind=()=>{
   // console.log(text)
     setDummy(text)
    setText("")
 
 }
 useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_URL}/search.php?s=${dummy}`)
      .then((res)=> res.json())
      .then((res)=>{
       // console.log(res.meals[0])
        setData(res.meals[0])
      })
        
 },[dummy])
 //console.log(process.env.REACT_APP_URL)

  return (
    <div>
     {/* <h2>{process.env.REACT_APP_URL}</h2> */}
        <h1>Search</h1>
        <div>
            <input placeholder='search here....' type="text" name="text" onChange={(e)=> setText(e.target.value)} value={text} />
        </div>
        <div><button onClick={handleFind}>Find</button></div>
        <br />
        <br />
        <br />
        <div>
            <h1>{data?.strArea}</h1>
            <h2>{data?.strMeal}</h2>
            <img src={data?.strMealThumb} alt="" />
            <p>{data?.strInstructions}</p>
        </div>
    
           
    
    
    </div>
  )
}

export default Search
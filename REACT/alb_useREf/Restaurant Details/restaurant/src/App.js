import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant';
import { useEffect, useState } from 'react';

function App({item}) {


  const [data, setData] = useState([])



 
  useEffect(()=>{
   const  api = async ()=>{
       try{
         const res = await fetch("http://localhost:8080/data")
         const item = await res.json();
         setData(item)
       }
       catch(error){
         console.log(error)
       }
 
   }
   api()

  },[])
  console.log(data)

  return (
    <div className="App">
  {data.map((obj)=>{
    return (
      <Restaurant key={obj.id} item={obj} />
    )
  })}
    </div>
  );
}

export default App;

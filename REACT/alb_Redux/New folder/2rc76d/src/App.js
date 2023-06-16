import "./styles.css";
import {useDispatch, useSelector} from "react-redux"


export default function App() {
const count = useSelector((state)=> state.count)
const dispatch = useDispatch()
 


 const handleAdd=()=>{
   dispatch({type:"INCREMENT_COUNT"})
 }
 const handleReduce=()=>{
  dispatch({type:"DECREMENT_COUNT"})
 }

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import SeacrhBar from './components/SeacrhBar';
import { useCallback, useEffect, useState } from 'react';
import Countries from './Utils/searchData';

function App() {
  const [textValue, setTextValue]= useState("")
  const [query, setQuery] = useState([])
 
  const queryHandler= useCallback((value)=> {
       setTextValue(value)
  },[])


    useEffect(()=> {
    if(textValue===""){
      setQuery([])
    }
    else{
      let newCountries = Countries.filter((item)=> {
        return item.country.toLowerCase().indexOf(textValue)
        !== -1 ? true: false
      })
      .map((item)=> item.country);
      setQuery(newCountries)
    }
    },[textValue])

  return (
    <div className="App">
      <h1>Search Bar PSC</h1>
      <h3>The search Query "{textValue}"</h3>
      <SeacrhBar query={query} queryHandler={queryHandler} />
    </div>
  );
}

export default App;

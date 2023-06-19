import React, { useEffect, useRef, useState } from "react";
import "../App.css"
import {useThrottle} from "use-throttle"

const SeacrhBar = ({ queryHandler, query }) => {
   const [active ,setActive]= useState(0)
    const [input, setInput] = useState("");
    const scrollRef = useRef()
  const setInputFunc = (e) => {
    setInput(e.target.value);
  };

 
  const handleActiveSuggestion=(e)=>{
    // console.log(active)
   // console.log(e.keyCode)

   switch(e.keyCode){
    case 38: 
    if(active===1){
        scrollRef.current.scrollTop = query.length*38.667
        setActive(query.length)
    }

    if(active <= query.length - 4 ){
        scrollRef.current.scrollTop -=38.667
    }
    setActive((prev)=> prev-1);
    break;
 
     case 40: 
     if(active===query.length){
        scrollRef.current.scrollTop=0;
        setActive(0)
     }

     if(active >= 4){
        scrollRef.current.scrollTop +=38.67
     }
     setActive((prev)=> prev-1);
     break;

     default:
        return;

   }
   
  }

//   useEffect(() => {
//     queryHandler(input);
//   }, [queryHandler, input]);

  const throttleText = useThrottle(input, 1000)

 useEffect(()=> {
    queryHandler(throttleText)
 },[input, throttleText])


//console.log(active)
  return (
    <div  onKeyUp={handleActiveSuggestion}>
      <div >
        <input  type="text" value={input} onChange={setInputFunc} />
      </div >
      <div className="searchDiv">
      {query.length>0 && query.map((abc, index) => {
        return <div limit={5} ref={scrollRef} onMouseOver={()=> setActive(index+1)} className="search" key={abc.id}>{abc} </div>;
      })}
      </div>
      </div>
  );
};

export default SeacrhBar;

import React, { useEffect, useState } from 'react'

const Increament = () => {
    
 const [timerId, setTimerId] = useState(null)
 const [watch, setWatch] = useState(0)
 
 const start = () =>{
    let id = setInterval(()=> {

        setWatch((prev) => 
        {
        if(prev ==100){
            setWatch(0)
        }
        else{
          setWatch(prev +1)
        }
        }
       )
    },100)
    setTimerId(id)
 }



function msToTime(duration) {
    var milliseconds = parseInt((duration%1000))
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }


  return (
    <div>
         <h1>Increament :{msToTime(watch)}</h1>
         <button onClick={start}>Increament</button>
    
    </div>

  )
}

export default Increament
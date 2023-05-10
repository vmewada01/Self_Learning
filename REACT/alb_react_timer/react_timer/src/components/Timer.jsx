import React, { useEffect, useRef, useState } from "react";
import styles from "../components/Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(0);
 const [change, setChange]= useState(false)

  const ChngRef = useRef(null);

  const handleStart = () => {
    if (ChngRef.current) {
      return;
    }

    ChngRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, -9000);
  };
  const handleStop = () => {
    if (ChngRef.current) {
      clearInterval(ChngRef.current);
      ChngRef.current = null;
    }
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  useEffect(() => {
    //clean up
    return handleStop;
  }, []);




  const isTimer = ()=>{

    setChange(!change)
    //console.log(change)

    if(!change){

    }

  }






  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(remainingMilliseconds).padStart(
      3,
      "0"
    );

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  const TimerFormat = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
 

    return `${formattedHours}:${formattedMinutes}`;
  };

 




  return (
    <div>
      <div style={{padding:"30px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", width: "50%", margin: "auto",display:"flex", flexDirection:"column", alignContent: "center", alignItems:"center"}}>
        <h1>{ change ? `StopWatch : ${formatTime(time)}` : `Timer ${TimerFormat(time)}`}</h1>
        <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
      
        </div>
        <button onClick={isTimer}>Toggle</button>
      </div>
     
    </div>
  );
};

export default Timer;

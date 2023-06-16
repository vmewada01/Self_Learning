import logo from "./logo.svg";
import "./App.css";
import useTimeout from "./UseHooks/useTimeout";
import Checkout from "./Components/Checkout";
import useFetch from "./UseHooks/useFetch";
import { useEffect, useState } from "react";
import useDebounce from "./UseHooks/useDebounce";
import useThrottle from "./UseHooks/useThrottle";
import useTimer from "./UseHooks/useTimer";

function App() {
  // const data = useTimeout();
  // const { item, error, loading } = useFetch("http://api.github.com/users?q=Masai");
  // console.log(item, error, loading);

  // const [count, setCount] = useState(0);

  // const handleScrollEvent = () => {
  //   setCount((prev) => prev + 1);
  // };

  // useThrottle(() => {}, 3000);

  // // useDebounce(() => {}, 2000);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollEvent);
  //   };
  // }, []);

  const {timer,handleStop, handleStart, handleReset} = useTimer()

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



  return (
    <div className="App">
      {/* <div style={{ position: "sticky", top: "100px" }}>
        <h3>scroll Count : {count}</h3>
      </div>
      <h1>Components</h1>
      <h2> {data ? "I m Ready " : "I m confused"} </h2>
      {/* <Checkout/> */}
      {/* <div>{loading ? "Complete" : "LOADING....!!!"}</div>
      <div>{error ? "Everything looks fine..!!" : "Something went wrong"}</div>
      {item.map((abc) => {
        return <div key={abc.id}>{abc.login}</div>;
      })} */}
 
          <h1>`{formatTime(timer)}`</h1>
        <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
      
        </div>
       

    </div>
  );
}

export default App;

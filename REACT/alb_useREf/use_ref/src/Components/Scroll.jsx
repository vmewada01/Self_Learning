import React, { useRef } from "react";

const Scroll = () => {
    
  const ref = useRef(null);
  const scroll=()=>{
    ref.current.scrollTop = 0;
  }
  const data = new Array(100).fill(0).map((item, i) => <li key={i}>{i}</li>);
  return (
    <div>
    <div
      ref={ref}
      style={{ border: "1px solid black", height: "300px", overflow: "scroll" }}
    >
      <ul>{data}</ul>
     
    </div>
     <button  onClick={Scroll}>Scroll Top</button>
     </div>
  );
};

export default Scroll;

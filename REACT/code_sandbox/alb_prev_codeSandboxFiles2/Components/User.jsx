import React, { useState } from "react";

function User({ ui }) {
  const [follow, setFollow] = useState(false)

 const chngFollow=()=>{
   setFollow(!follow)
 }

  return (
    <div className="box">
      <div>
        <h1>{ui.name} <span><button onClick={chngFollow}>{follow ? "Following" : "Follow"}</button></span></h1>
        <h1 className='head'>{ui.work}</h1>
        <h3 className='head1'>{ui.education}</h3>

        {ui.skills.map((abc) => {
          return <div style={{backgroundColor: 'teal', display: "inline-block", margin:"5px", padding:"5px", borderRadius:"5px", color:"white"}}>{abc}</div>;
        })}
      </div>

      <div>
        <img src={ui.imageUrl} alt="img" />
      </div>
    </div>
  );
}

export default User;

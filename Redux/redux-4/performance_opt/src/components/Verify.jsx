import React, { useMemo, useState } from 'react'


const Verify = () => {
const [change, setChange] = useState(false)
    
const ChangeColor = (delay)=> {
  const id=  setTimeout(()=> {
      setChange(true)
    },delay)
    return ()=> {
        clearTimeout(id)
    }
}

  const isDone = useMemo(()=> ChangeColor(5000))

  return (
    <div style={{border:"1px solid black"}}>
        <div style={{backgroundColor: change? "Yellow" : "green"}} >Content</div>

    </div>
  )
}

export default React.memo(Verify)
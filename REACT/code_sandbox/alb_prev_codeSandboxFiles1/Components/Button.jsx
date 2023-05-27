import { useState } from "react"

function Button(){
  const [amount ,setAmount] = useState(0)

  const handlDeposit=()=>{
    setAmount(amount +100)
  }
  const handleWithdraw=()=>{
    if(amount===0){
      setAmount(0)
    }
    setAmount(amount -100)
  }
  return (
    <div>
     <h1>Amount : {amount}</h1>
     <div><button onClick={handlDeposit}>Deposit 100</button></div>
     <div><button onClick={handleWithdraw}>Withdraw 100</button></div>

    </div>
  )
}

export default Button
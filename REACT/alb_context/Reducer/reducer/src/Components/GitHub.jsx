import React, { useReducer, useState } from 'react'
import { GitReducer } from '../Reducer/GitReducer'
import { fetchUser } from '../Reducer/Action'

const intialValue={
   isLoading: false,
   isError: false,
   data: [] ,
    token:""
}

const GitHub = () => {
 
    const [state, dispatch] = useReducer(GitReducer, intialValue)
    const [text, setText]= useState("")
console.log(state)


  return (
    <div>
     <div>
        <input type="text" placeholder='enterSomething Here.....' value={text} onChange={(e)=> setText(e.target.value)} />
     </div>
      <button onClick={fetchUser(dispatch,text)}>submit</button>


      <div>
        {state.data?.map((item)=>{
            <div key={item.login}>{item.login} </div>
        })}
      </div>

    </div>
  )
}

export default GitHub
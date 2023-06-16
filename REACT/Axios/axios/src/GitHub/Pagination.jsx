import React from 'react'

const Pagination = ({page, setPage}) => {
  return (
    <div>
        <button disabled={page==1} onClick={()=>setPage(1)}>1</button>
        <button disabled={page==2} onClick={()=>setPage(2)}>2</button>
        <button disabled={page==3} onClick={()=>setPage(3)}>3</button>
        <button disabled={page==4} onClick={()=>setPage(4)}>4</button>
        <button disabled={page==5} onClick={()=>setPage(5)}>5</button>
    </div>
  )
}

export default Pagination